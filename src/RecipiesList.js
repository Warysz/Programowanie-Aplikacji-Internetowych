import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Divider from "@mui/material/Divider";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const StyledCard = styled(Card)`
  height: 100%;
  cursor: pointer;
`;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const RecipiesList = ({ recipes }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedRecipe, setRecipe] = React.useState({
    recipe: {
      label: "",
      image: "",
      ingredientLines: [],
    },
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={2} padding={{ xs: 1, md: 3, lg: 5 }}>
        {recipes.map((recipe) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            onClick={() => {
              setOpen(true);
              setRecipe(recipe);
            }}
          >
            <StyledCard>
              <CardMedia
                sx={{ height: 240 }}
                image={recipe.recipe.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.recipe.label}
                </Typography>
                <Divider flexItem />
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  align="left"
                >
                  <ul>
                    <li>Calories: {Math.round(recipe.recipe.calories)}</li>
                    <li>Cuisine Type: {recipe.recipe.cuisineType}</li>
                    <li>Diet Labels: {recipe.recipe.dietLabels}</li>
                    <li>
                      Total Time: {Math.round(recipe.recipe.totalTime / 60) + 1}{" "}
                      h
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <React.Fragment>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle
            sx={{ m: 0, p: 2, width: 360 }}
            id="customized-dialog-title"
          >
            {selectedRecipe.recipe.label}
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <StyledCard>
              <CardMedia
                sx={{ height: 300 }}
                image={selectedRecipe.recipe.image}
                title="green iguana"
              />
            </StyledCard>
            <Typography
              gutterBottom
              variant="h5"
              fontWeight="strong"
              margin={2}
            >
              Ingredient:
            </Typography>
            {selectedRecipe.recipe.ingredientLines.map((ingredientLine) => (
              <Typography gutterBottom variant="body2" component="div">
                {ingredientLine}
              </Typography>
            ))}
            <Typography gutterBottom></Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>
    </>
  );
};
