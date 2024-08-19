import React, { useState, useEffect } from "react";
import { Container, Card, CardContent, Typography, Divider, IconButton, Collapse, Button, Stack } from '@mui/material';
import { AccessTime, PriorityHigh, Label, ExpandMore, ExpandLess, Edit, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import TaskCard from "../../components/cards/TaskCard";

import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";



const ProjectCard = ({ project }) => {
    const { taskList, tasksLoaded } = useSelector(state => state.taskReducer);
    const { removeProject, removeTask } = useAction();
    const { loadTasks } = useAction();

    const [projectTasks, setProjectTasks] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        if (!tasksLoaded) {
            loadTasks();
        }
    }, []);

    useEffect(() => {
        const tasks = taskList.filter(task => task.projectId === project.id);
        setProjectTasks(tasks);

    }, [taskList]);




    const deleteProjectHandler = (projectId) => {
        projectTasks.forEach(task => {
            removeTask(task.id);
        });

        removeProject(projectId);
    };

    const editProjectHandler = (id) => {
        navigate(`/projectFormPage/${id}`);
    }


    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ marginBottom: 2, width: '100%', position: 'relative' }}>
            <CardContent>

                <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label={expanded ? "show less" : "show more"}
                    >
                        {expanded ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {project.name}
                    </Typography>



                    <IconButton aria-label="edit"
                        onClick={() => editProjectHandler(project.id)}>

                        <Edit />
                    </IconButton>

                    <IconButton aria-label="delete"
                        onClick={() => deleteProjectHandler(project.id)}>
                        <Delete />
                    </IconButton>

                </Stack>




                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Divider sx={{ marginY: 1 }} />

                    <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                        {`Description: ${project.description}`}
                    </Typography>

                    <Container
                        maxWidth="lg"
                        sx={{
                            width: { xs: '100%', lg: '100%' },
                            paddingTop: 2,
                        }}
                    >
                        {projectTasks.map(task => (
                            <TaskCard key={task.id} task={task} />
                        ))}

                    </Container>



                </Collapse>

            </CardContent>
        </Card>
    );

};

export default ProjectCard;
