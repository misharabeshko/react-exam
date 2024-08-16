import React, { useState, useEffect } from "react";
import {
    Container,
    Grid,
    Typography,
    Button
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import ProjectCard from "../../components/cards/ProjectCard";

import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";





const ProjectListPage = () => {
    const { projectList, projectsLoaded } = useSelector(state => state.projectReducer);
    const { loadProjects } = useAction();

    useEffect(() => {
        if (!projectsLoaded) {
            loadProjects();
        }
    }, []);

    const navigate = useNavigate();

    const handleAddProjectClick = () => {
        navigate("/projectFormPage");
    };


    return (
        <Container maxWidth="lg" sx={{ paddingY: 4, bgcolor: "primary.light", borderRadius: 4 }}>
            <Grid container spacing={2} sx={{ padding: 1 }}>

                <Typography variant="h4" component="h1" sx={{ mt: 2, ml: 2 }}>
                    Project List:
                </Typography>



                <Container
                    maxWidth="lg"
                    sx={{
                        width: { xs: '100%', lg: '95%' },
                        paddingY: 2,
                        marginX: 'auto'
                    }}
                >

                    {projectList.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}




                    <Grid item xs={12} md={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ height: "100%" }}
                            onClick={handleAddProjectClick}
                        >
                            Add Project
                        </Button>
                    </Grid>

                </Container>


            </Grid>
        </Container>
    );
};

export default ProjectListPage;
