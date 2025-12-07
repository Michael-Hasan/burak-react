import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopUsers } from "./selector";
import { serverApi } from "../../../lib/data/config";
import { Member } from "../../../lib/data/types/member";

/**  REDUX SLICE & SELECTOR */
const topUsersRetriever = createSelector(retrieveTopUsers, (topUsers) => ({
  topUsers,
}));

export default function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriever);
  return (
    <div className={"active-users-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Active Users</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {topUsers.length !== 0 ? (
                topUsers.map((member: Member) => {
                  const imagePath = `${serverApi}/${member.memberImage}`;
                  return (
                    <Card
                      key={member._id}
                      variant="outlined"
                      sx={{ width: 300, borderRadius: "md", boxShadow: "sm" }}
                    >
                      <CardOverflow className="card-image">
                        <AspectRatio ratio="1/1">
                          <img src={imagePath} alt={member.memberNick} />
                        </AspectRatio>
                      </CardOverflow>

                      <Box sx={{ p: 0.5, textAlign: "center" }}>
                        <Typography level="title-md">
                          {member.memberNick}
                        </Typography>
                      </Box>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">No Active Users</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
