import Stack from "@mui/material/Stack";
import {
    DataGrid,
    GridRowsProp,
    GridColDef,
    GridToolbar,
    GridToolbarFilterButton,
} from "@mui/x-data-grid";

const rows: GridRowsProp = [
    {
        id: 1,
        col1: "English for IT",
        col2: "Adults",
        col3: "Short-term specialist",
        col4: "B2",
        col5: "Rosa Luxembourg, 135",
        col6: "123 655",
    },
    {
        id: 2,
        col1: "Business correspondence in English",
        col2: "Adults",
        col3: "Business correspondence and communication",
        col4: "B2",
        col5: "Romanovskaya Sloboda, 2A",
        col6: "499",
    },
    {
        id: 3,
        col1: "German for business",
        col2: "Adults",
        col3: "The langauge used in the",
        col4: "B1",
        col5: "Pritytsky, 32k1",
        col6: "16 543",
    },
    {
        id: 4,
        col1: "German for doctors",
        col2: "Adults",
        col3: "Ability to interview",
        col4: "B2+",
        col5: "Romanovskaya Sloboda, 2A",
        col6: "3 232",
    },
    {
        id: 5,
        col1: "German for travel",
        col2: "Adults",
        col3: "The five most important topics",
        col4: "A2",
        col5: "Roxa Luxembourg, 135",
        col6: "12 665",
    },
    {
        id: 6,
        col1: "General German course",
        col2: "Children",
        col3: "Beginning level",
        col4: "A1",
        col5: "Kuzma Chernoy, 4",
        col6: "12 133",
    },
    {
        id: 7,
        col1: "General German course",
        col2: "Adults",
        col3: "Practical mastery of",
        col4: "A2",
        col5: "Pritytsky, 32k1",
        col6: "965",
    },
    {
        id: 8,
        col1: "General German course",
        col2: "Adults",
        col3: "Practical mastery of",
        col4: "B1",
        col5: "Pritytsky, 32k1",
        col6: "8 763",
    },
    {
        id: 9,
        col1: "General English course",
        col2: "Adults",
        col3: "Beginning level",
        col4: "A1",
        col5: "Romanovskaya Sloboda, 2A",
        col6: "126 697",
    },
    {
        id: 10,
        col1: "General English course",
        col2: "Adults",
        col3: "Covers several",
        col4: "B1",
        col5: "Rosa Luxembourg, 135",
        col6: "13 699",
    },
];

const columns: GridColDef[] = [
    { field: "col1", headerName: "Course name", width: 300 },
    { field: "col2", headerName: "Age group", width: 150 },
    { field: "col3", headerName: "Description", width: 500 },
    { field: "col4", headerName: "Language level", width: 150 },
    { field: "col5", headerName: "Studio adress", width: 150 },
    {
        field: "col6",
        headerName: "Number of students",
        width: 150,
        align: "right",
    },
];

function CustomToolBar() {
    return (
        <Stack direction="row" p={2}>
            <GridToolbarFilterButton />
        </Stack>
    );
}

function DataTable() {
    return (
        <Stack mt={5}>
            <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
                checkboxSelection
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10, 25]}
                slots={{
                    toolbar: CustomToolBar,
                }}
            />
        </Stack>
    );
}

export default DataTable;
