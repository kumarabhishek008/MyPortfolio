import React from "react";
import "./style.scss";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const skill = [
  "HTML",
  "CSS",
  "SCSS",
  "Javascript",
  "React Js",
  "Sementic UI",
  "Material UI",
  "Bootstrap",
  "Python",
  "Webpack",
  "Grapes Js",
  "React-Redux",
  "Redux-Saga",
  "Django",
  "NodeJS",
];
const Skills = (props) => {
     const classes = useStyles();
  return (
    <div id="skills">
      <div className="skills-header">
        <h1>Skills</h1>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {skill.map((items) => (
            <Grid item xs={4}>
              <Paper className={classes.paper} color='secondary'>
                {items}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Skills;
