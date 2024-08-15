import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Container, Grid, FormHelperText } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAction } from '../../hooks/useAction';
import { useDispatch, useSelector } from 'react-redux';

const TaskFormPage = () => {
    const navigate = useNavigate();

    const { taskId } = useParams();
    const { taskList } = useSelector(state => state.taskReducer);

    const { addTask, editTask } = useAction();
    const [task, setTask] = useState(null);



    useEffect(() => {
        if (taskId) {
            const foundTask = taskList.find(t => t.id === Number(taskId));
            if (foundTask) {
                setTask(foundTask);
                formik.setValues({
                    title: foundTask.title || '',
                    dueDate: foundTask.dueDate || '',
                    description: foundTask.description || '',
                    tags: foundTask.tags.join(', ') || '',
                    priority: foundTask.priority || '',
                    projectId: foundTask.projectId || null
                });
            } else {
                formik.resetForm();
            }
        } else {
            formik.resetForm();
        }
    }, [taskId]);

    const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        dueDate: Yup.date().required('Required').nullable(),
        description: Yup.string(),
        tags: Yup.string(),
        priority: Yup.string().oneOf(['low', 'medium', 'high'], 'Invalid priority').required('Required'),
        projectId: Yup.string().nullable(),
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            dueDate: '',
            description: '',
            tags: '',
            priority: '',
            projectId: null,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const tagsArray = values.tags.split(',').map(tag => tag.trim());

            const taskData = {
                id: taskId ? Number(taskId) : new Date().getTime(),
                title: values.title,
                dueDate: values.dueDate,
                description: values.description,
                tags: tagsArray,
                priority: values.priority,
                projectId: values.projectId
            };

            if (taskId) {
                console.log('Updating task with data:', taskData);
                editTask(taskData);

            } else {
                console.log('Adding new task with data:', taskData);
                addTask(taskData);

            }


            navigate("/");
        },
    });

    return (
        <Container component="form" onSubmit={formik.handleSubmit} maxWidth="sm" sx={{ paddingY: 2, bgcolor: "primary.light", borderRadius: 4 }}>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <TextField
                        label="Title"
                        name="title"
                        fullWidth
                        margin="normal"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                        FormHelperTextProps={{
                            sx: { color: "error.main", fontSize: 14 }
                        }}
                    />
                </Grid>


                <Grid item xs={12}>
                    <TextField
                        label="Due Date/Time"
                        name="dueDate"
                        type="datetime-local"
                        fullWidth
                        margin="normal"

                        value={formik.values.dueDate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        InputLabelProps={{ shrink: true }}

                        error={formik.touched.dueDate && Boolean(formik.errors.dueDate)}
                        helperText={formik.touched.dueDate && formik.errors.dueDate}
                        FormHelperTextProps={{
                            sx: { color: "error.main", fontSize: 14 }
                        }}
                    />
                </Grid>


                <Grid item xs={12}>
                    <TextField
                        label="Description"
                        name="description"
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"

                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>


                <Grid item xs={12}>
                    <TextField
                        label="Tags (comma separated)"
                        name="tags"
                        fullWidth
                        margin="normal"

                        value={formik.values.tags}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>


                <Grid item xs={12}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Priority</InputLabel>
                        <Select
                            name="priority"
                            label="Priority"
                            value={formik.values.priority}

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.priority && Boolean(formik.errors.priority)}
                        >
                            <MenuItem value="low">Low</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                        </Select>
                        {formik.touched.priority && formik.errors.priority && (
                            <FormHelperText sx={{ color: "error.main", fontSize: 14 }}>
                                {formik.errors.priority}
                            </FormHelperText>
                        )}
                    </FormControl>
                </Grid>


                <Grid item xs={6}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Save
                    </Button>
                </Grid>


                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={() => navigate("/")}
                    >
                        Cancel
                    </Button>
                </Grid>


            </Grid>
        </Container>
    );
};

export default TaskFormPage;
