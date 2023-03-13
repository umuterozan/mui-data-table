import { Stack, Button } from "@mui/material";
import {
    Done as DoneIcon,
    History as HistoryIcon,
    SaveOutlined as SaveOutlinedIcon,
    ArrowDropDown as ArrowDropDownIcon,
    Cancel as CancelIcon,
} from "@mui/icons-material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Body() {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={5}
        >
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker label="Report date" />
            </LocalizationProvider>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" startIcon={<DoneIcon />}>
                    CREATE
                </Button>
                <Button variant="outlined" startIcon={<HistoryIcon />}>
                    HISTORY
                </Button>
                <Button variant="outlined" startIcon={<SaveOutlinedIcon />}>
                    SAVE
                </Button>
                <Button variant="outlined" endIcon={<ArrowDropDownIcon />}>
                    DOWNLOAD REPORT
                </Button>
                <Button variant="outlined" startIcon={<CancelIcon />}>
                    CLOSE
                </Button>
            </Stack>
        </Stack>
    );
}

export default Body;
