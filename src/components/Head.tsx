import { Stack, Typography, TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

function Head() {
    return (
        <Stack direction="row" justifyContent="space-between" mt={5}>
            <Typography variant="h4">Summary of all courses</Typography>
            <TextField
                label="Search by title or curator"
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    width: 500,
                }}
            />
        </Stack>
    );
}

export default Head;
