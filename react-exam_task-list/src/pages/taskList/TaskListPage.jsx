import React, { useState } from "react";
import {
    ListItemText,
    ListItem,
    List,
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


const TaskListPage = () => {

    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', dueDate: '2024-08-15T10:00:00', description: "Description of Task 1", tags: ["urgent", "home"], priority: "high", projectId: 1 },
        { id: 2, title: 'Task 2', dueDate: '2024-08-15T10:00:00', description: "Description of Task 2", tags: ["urgent", "home"], priority: "high", projectId: 1 },
        { id: 3, title: 'Task 3', dueDate: '2024-08-15T10:00:00', description: "Description of Task 3", tags: ["urgent", "home"], priority: "high", projectId: 1 },
    ]);

    const navigate = useNavigate();


    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        // console.log(event.target.value);
    };



    const handleSearchTaskClick = () => {
        navigate('/');
    };
    const handleAddTaskClick = () => {
        navigate('/');
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




                    {tasks.map(task => (
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
