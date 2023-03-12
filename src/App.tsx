import CssBaseline from "@mui/material/CssBaseline";
import { Container, Typography, TextField, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import {
    ZoomIn,
    Done,
    History,
    SaveOutlined,
    ArrowDropDown,
    Cancel,
} from "@mui/icons-material";
import DataTableDemo from "./components/DataTableDemo";

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <CssBaseline />
            <Container maxWidth="xl">
                <div className="flex items-center justify-between mt-16">
                    <div className="grid gap-y-4">
                        <Typography variant="h4">
                            Summary of all courses
                        </Typography>
                        <Typography className="underline text-blue-700">
                            Last updated August 25, 2021 at 09:45
                        </Typography>
                    </div>
                    <div className="flex items-center relative w-[500px]">
                        <TextField
                            placeholder="Search by title or curator"
                            className="w-full"
                        />
                        <ZoomIn className="absolute right-3" />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-16">
                    <div>
                        <DatePicker label="Report date" />
                    </div>
                    <div className="flex gap-x-4">
                        <Button variant="contained" startIcon={<Done />}>
                            Create
                        </Button>
                        <Button variant="outlined" startIcon={<History />}>
                            History
                        </Button>
                        <Button variant="outlined" startIcon={<SaveOutlined />}>
                            Save
                        </Button>
                        <Button variant="outlined" endIcon={<ArrowDropDown />}>
                            Download Report
                        </Button>
                        <Button variant="outlined" startIcon={<Cancel />}>
                            Close
                        </Button>
                    </div>
                </div>
                <div className="mt-16">
                    <DataTableDemo />
                </div>
            </Container>
        </LocalizationProvider>
    );
}

export default App;
