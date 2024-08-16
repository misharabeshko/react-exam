import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Grid, FormHelperText } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAction } from '../../hooks/useAction';
import { useSelector } from 'react-redux';

const ProjectFormPage = () => {
    const navigate = useNavigate();

    const { projectId } = useParams();
    const { projectList } = useSelector(state => state.projectReducer);
    const { addProject, editProject } = useAction();


    useEffect(() => {
        if (projectId) {
            const foundProject = projectList.find(p => p.id === Number(projectId));
            if (foundProject) {
                formik.setValues({
                    name: foundProject.name || '',
                    description: foundProject.description || '',
                });
            }
        }
    }, [projectId]);

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        description: Yup.string(),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const projectData = {
                id: projectId ? Number(projectId) : new Date().getTime(),
                name: values.name,
                description: values.description,
            };

            if (projectId) {
                console.log('Updating project with data:', projectData);
                editProject(projectData);
            } else {
                console.log('Adding new project with data:', projectData);
                addProject(projectData);
            }

            navigate("/projectListPage");
        },
    });

    return (
        <Container component="form" onSubmit={formik.handleSubmit} maxWidth="sm" sx={{ paddingY: 2, bgcolor: "primary.light", borderRadius: 4 }}>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <TextField
                        label="Project Name"
                        name="name"
                        fullWidth
                        margin="normal"

                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
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
                        onClick={() => navigate("/projectListPage")}
                    >
                        Cancel
                    </Button>
                </Grid>

            </Grid>
        </Container>
    );
};

export default ProjectFormPage;
