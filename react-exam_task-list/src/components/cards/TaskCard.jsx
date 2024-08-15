import React, { useState } from 'react';
import { Card, CardContent, Typography, Divider, IconButton, Collapse, Button, Stack } from '@mui/material';
import { AccessTime, PriorityHigh, Label, ExpandMore, ExpandLess, Edit, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";


const TaskCard = ({ task }) => {
    const { taskList, tasksLoaded } = useSelector(state => state.taskReducer);
    const { loadTasks, removeTask } = useAction();

    const navigate = useNavigate();


    const deleteTaskHandler = (id) => {
        removeTask(id, taskList);
    };

    const editTaskHandler = (id) => {
        navigate(`/taskFormPage/${id}`);
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

                    <Typography variant="h6" component="div" sx={{ flexGrow: 0.3 }}>
                        {task.title}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" sx={{ flexGrow: 0.7 }}>
                        Project ID: {task.projectId !== null ? task.projectId : "Not Available"}
                    </Typography>

                    <IconButton aria-label="edit"
                        onClick={() => editTaskHandler(task.id)}>

                        <Edit />
                    </IconButton>

                    <IconButton aria-label="delete"
                        onClick={() => deleteTaskHandler(task.id)}>
                        <Delete />
                    </IconButton>

                </Stack>


                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Divider sx={{ marginY: 1 }} />

                    <Typography variant="body2" color="textSecondary">
                        <AccessTime sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                        Due: {new Date(task.dueDate).toLocaleString()}
                    </Typography>

                    <Typography variant="body2" color="textSecondary">
                        <PriorityHigh sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                        Priority: {task.priority}
                    </Typography>

                    <Typography variant="body2" color="textSecondary">
                        <Label sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                        Tags: {task.tags.join(', ')}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                        {task.description}
                    </Typography>

                </Collapse>
            </CardContent>
        </Card>
    );
};

export default TaskCard;
