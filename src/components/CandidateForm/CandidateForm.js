import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import useStyles from "./CandidateFormStyle";
import {
  createCandidate,
  getDepartments,
} from "../../store/actions/candidates";
import { withRouter } from "react-router-dom";
import { InputLabel } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

function CandidateForm(props) {
  const { getDepartments, departments } = props;
  const classes = useStyles();

  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = String(currentDate.getMonth() + 1).padStart(2, "0");
  var day = String(currentDate.getDate()).padStart(2, "0");
  var formattedDate = year + "/" + month + "/" + day;
  console.log(formattedDate);

  const [data, setData] = useState({
    full_name: "",
    date_of_birth: formattedDate,
    years_of_experience: 0,
    department: "",
    resume: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    var date = new Date("Thu May 25 2023 00:00:00 GMT+0300 (GMT+03:00)");
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");
    var formattedDate = year + "-" + month + "-" + day;
    console.log(formattedDate);

    const formData = new FormData();
    formData.append("full_name", data.full_name);
    formData.append("date_of_birth", formattedDate);
    formData.append("years_of_experience", data.years_of_experience);
    formData.append("department", data.department);
    formData.append("resume", data["resume"]);
    fetch("http://localhost:8000/api/candidate-details/", {
      method: "POST",
      body: formData,
    }).then((response) => {});
  };

  useEffect(() => {
    getDepartments();
  }, [getDepartments]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileName = file.name;
    const fileExtension = fileName.split(".").pop();
    if (fileExtension === "pdf" || fileExtension === "docx") return true;
    else return false;
  };
  return (
    <Container className={classes.container} maxWidth="sm">
      <form
        className={classes.form}
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <TextField
          className={classes.input}
          label="Full Name"
          variant="outlined"
          onChange={(e) => setData({ ...data, full_name: e.target.value })}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            style={{
              width: "100%",
            }}
            label="Date of Birth"
            value={data.date_of_birth}
            onChange={(date) => setData({ ...data, date_of_birth: date })}
            format="yyyy/MM/dd"
            variant="outlined"
          />
        </MuiPickersUtilsProvider>
        <TextField
          onChange={(e) =>
            setData({ ...data, years_of_experience: e.target.value })
          }
          className={classes.input}
          label="Years of Experience"
          variant="outlined"
          type="number"
        />
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          className={classes.formControl}
        >
          <InputLabel htmlFor="outlined-age-native-simple">
            Department
          </InputLabel>
          <Select
            native
            value={data.department}
            onChange={(e) => setData({ ...data, department: e.target.value })}
            label="Department"
            inputProps={{
              name: "department",
              id: "outlined-age-native-simple",
            }}
          >
            <option disabled value=""></option>
            {departments?.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <div style={{ display: "flex", width: "100%" }}>
          <InputLabel style={{ whiteSpace: "nowrap", marginRight: "25px" }}>
            Uplaad your resume
          </InputLabel>
          <input
            onChange={(e) =>
              handleFileChange(e) &&
              setData({ ...data, resume: e.target.files[0] })
            }
            className={classes.input}
            type="file"
            accept=".pdf,.docx"
          />
        </div>
        <Button
          className={classes.submit}
          variant="contained"
          color="primary"
          type="submit"
        >
          Apply
        </Button>
      </form>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  departments: state.departments.departments,
});

const mapDispatchToProps = (dispatch) => ({
  createCandidate(payload) {
    dispatch(createCandidate(payload));
  },
  getDepartments(payload) {
    dispatch(getDepartments(payload));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CandidateForm)
);
