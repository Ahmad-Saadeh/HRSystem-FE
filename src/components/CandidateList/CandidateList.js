import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  getCandidatesList,
  getDepartments,
} from "../../store/actions/candidates";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

function CandidateList(props) {
  const { getCandidatesList, getDepartments, candidates, departments } = props;

  useEffect(() => {
    getCandidatesList();
    getDepartments();
  });

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 130,
      align: "center",
    },
    {
      field: "full_name",
      headerName: "Full name",
      width: 130,
      align: "center",
    },
    {
      field: "date_of_birth",
      headerName: "Date of Birth",
      width: 130,
      align: "center",
    },
    {
      field: "years_of_experience",
      headerName: "Years of Experience",
      type: "number",
      width: 200,
      align: "center",
    },
    {
      field: "department",
      headerName: "Department",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 130,
      align: "center",
      valueGetter: (params) =>
        departments?.find((department) => department.id === params.value).name,
    },
    {
      field: "resume",
      headerName: "Resume",
      sortable: false,
      width: 130,
      align: "center",
      renderCell: (params) => {
        const candidate = params.row;
        const handleDownload = (pdfLink) => {
          const link = document.createElement("a");
          link.href = pdfLink;
          link.download = pdfLink;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };

        return (
          <Button onClick={() => handleDownload(candidate.resume)}>
            Download
          </Button>
          // <a
          //   href={candidate.resume}
          //   target="_blank"
          //   onClick={handleDownload}
          //   download
          // >
          //   Download
          // </a>
        );
      },
    },
  ];
  const rows = candidates?.map((candidate, index) => ({
    ...candidate,
    id: index + 1, // Generate unique id for each row
  }));

  return (
    <div
      style={{
        height: "80vh",
        width: "80vw",
        marginBlock: "25px",
        marginInline: "auto",
      }}
    >
      {candidates && candidates.length > 0 ? (
        <DataGrid
          disableSelectionOnClick
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection={false}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  candidates: state.candidates.candidates,
  departments: state.departments.departments,
});

const mapDispatchToProps = (dispatch) => ({
  getCandidatesList(payload) {
    dispatch(getCandidatesList(payload));
  },
  getDepartments(payload) {
    dispatch(getDepartments(payload));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CandidateList)
);
