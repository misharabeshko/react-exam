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
    Divider,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import TaskCard from "../../components/cards/TaskCard";

import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";


const TaskListPage = () => {
    const { taskList, tasksLoaded } = useSelector(state => state.taskReducer);
    const { loadTasks } = useAction();



    useEffect(() => {
        if (!tasksLoaded) {
            loadTasks();
        }
    }, []);







    // const [filter, setFilter] = useState('');

    // const handleFilterChange = (event) => {
    //     setFilter(event.target.value);
    // };


    const navigate = useNavigate();

    // const handleSearchTaskClick = () => {
    //     navigate("/");
    // };


    const handleAddTaskClick = () => {
        navigate("taskFormPage");
    };









    const [filteredTaskList, setFilteredTaskList] = useState([]);

    const [searchTitle, setSearchTitle] = useState('');
    const [searchTags, setSearchTags] = useState([]);
    const [searchDescription, setSearchDescription] = useState('');
    const [searchPriority, setSearchPriority] = useState('');
    const [searchTerm, setSearchTerm] = useState('');




    const filterTasks = () => {
        const filtered = taskList.filter(task => {
            const matchesTitle = task.title.toLowerCase().includes(searchTitle.toLowerCase());

            const matchesTags = searchTags.length > 0
                ? searchTags.some(tag => task.tags.map(t => t.toLowerCase()).includes(tag))
                : true;

            const matchesDescription = task.description.toLowerCase().includes(searchDescription.toLowerCase());

            const matchesPriority = searchPriority ? task.priority === searchPriority : true;

            const matchesTerm = searchTerm
                ? task.dueDate >= getStartOfPeriod(searchTerm) && task.dueDate <= getEndOfPeriod(searchTerm)
                : true;


            return matchesTitle && matchesTags && matchesDescription && matchesPriority && matchesTerm;
        });
        setFilteredTaskList(filtered);
    };



    const getStartOfPeriod = (term) => {
        const today = new Date();
        switch (term) {
            case 'day':
                return new Date(today.setHours(0, 0, 0, 0)).toISOString();
            case 'week':
                const startOfWeek = today.getDate() - today.getDay();
                return new Date(today.setDate(startOfWeek)).toISOString();
            case 'month':
                return new Date(today.getFullYear(), today.getMonth(), 1).toISOString();
            default:
                return new Date(0).toISOString();
        }
    };

    const getEndOfPeriod = (term) => {
        const today = new Date();
        switch (term) {
            case 'day':
                return new Date(today.setHours(23, 59, 59, 999)).toISOString();
            case 'week':
                const endOfWeek = today.getDate() + (6 - today.getDay());
                return new Date(today.setDate(endOfWeek)).toISOString();
            case 'month':
                return new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999).toISOString();
            default:
                return new Date().toISOString();
        }
    };




    useEffect(() => {

        filterTasks();

    }, [searchTitle, searchTags, searchDescription, searchPriority, searchTerm, taskList]);





    return (
        <Container maxWidth="lg" sx={{ paddingY: 4, bgcolor: "primary.light", borderRadius: 4 }}>
            <Grid container spacing={2} sx={{ padding: 1 }}>




                <Grid item xs={12} md={4}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth

                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />
                </Grid>


                <Grid item xs={12} md={4}>
                    <TextField
                        label="Tags"
                        variant="outlined"
                        fullWidth

                        value={searchTags}
                        onChange={(e) => setSearchTags(e.target.value.split(",").map(tag => tag.trim().toLowerCase()))}
                    />
                </ Grid>


                <Grid item xs={12} md={4}>
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth

                        value={searchDescription}
                        onChange={(e) => setSearchDescription(e.target.value)}
                    />
                </ Grid>


                <Grid item xs={6} md={4}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel>Priority</InputLabel>
                        <Select
                            value={searchPriority}
                            onChange={(e) => setSearchPriority(e.target.value)}

                            label="Priority"
                        >
                            <MenuItem value="">
                                <em>Всі</em>
                            </MenuItem>
                            <MenuItem value="low">Low</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>


                <Grid item xs={6} md={4}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel>Term</InputLabel>
                        <Select
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}

                            label="Term"
                        >
                            <MenuItem value="">
                                <em>Всі</em>
                            </MenuItem>
                            <MenuItem value="day">День</MenuItem>
                            <MenuItem value="week">Тиждень</MenuItem>
                            <MenuItem value="month">Місяць</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>




                {/* <Grid item xs={12} md={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth

                        // onClick={handleApplyFilters}
                    >
                        Apply
                    </Button>
                </Grid> */}


                <Grid item xs={12}>
                    <Divider />
                </Grid>





                {/* <Grid item xs={4} md={2}>
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
                </Grid> */}




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




                    {filteredTaskList.map(task => (
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
