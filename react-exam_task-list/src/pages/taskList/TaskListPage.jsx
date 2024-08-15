import React, { useState, useEffect } from "react";
import {
    Typography,
    InputLabel,
    FormControl,
    Select,
    MenuItem,
    Button,
    Container,
    Grid,
    TextField,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import TaskCard from "../../components/cards/TaskCard";

import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";


const TaskListPage = () => {
    const { taskList, tasksLoaded } = useSelector(state => state.taskReducer);
    const { loadTasks, removeTask } = useAction();

    const deleteTaskHandler = (id) => {
        removeTask(id, taskList);
    };

    useEffect(() => {
        if (!tasksLoaded) {
            loadTasks();
        }
    }, []);







    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };


    const navigate = useNavigate();

    const handleSearchTaskClick = () => {
        navigate("/");
    };
    const handleAddTaskClick = () => {
        navigate("taskFormPage");
    };




    return (
        <Container maxWidth="lg" sx={{ paddingY: 4, bgcolor: "primary.light", borderRadius: 4 }}>
            <Grid container spacing={2} sx={{ padding: 1 }}>



                <Grid item xs={4} md={2}>
                    <FormControl fullWidth>
                        <InputLabel>Filter</InputLabel>
                        <Select
                            value={filter}
                            onChange={handleFilterChange}
                            label="Filter"
                            sx={{ height: '100%' }}
                        >
                            <MenuItem value={""}>Option</MenuItem>
                            <MenuItem value={"1"}>Option 1</MenuItem>
                            <MenuItem value={"2"}>Option 2</MenuItem>
                            <MenuItem value={"3"}>Option 3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>


                <Grid item xs={8} md={8}>
                    <TextField label="Search" fullWidth />
                </Grid>


                <Grid item xs={12} md={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ height: '100%' }}
                        onClick={handleSearchTaskClick}

                    >
                        Search +
                    </Button>
                </Grid>




                <Typography variant="h4" component="h1" sx={{ mt: 2, ml: 2 }}>
                    Task List:
                </Typography>

                <Container
                    maxWidth="lg"
                    sx={{
                        width: { xs: '100%', lg: '95%' },
                        paddingY: 2,
                        marginX: 'auto'
                    }}
                >




                    {taskList.map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}




                    <Grid item xs={12} md={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ height: "100%" }}
                            onClick={handleAddTaskClick}
                        >
                            Add Task
                        </Button>
                    </Grid>

                </Container>





            </Grid>
        </Container>
    );
}

export default TaskListPage;
