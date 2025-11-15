import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

const activeUsers = [
  { memberNick: "Martin", memberImage: "/img/martin.webp" },
  { memberNick: "Justin", memberImage: "/img/justin.webp" },
  { memberNick: "Rose", memberImage: "/img/rose.webp" },
  { memberNick: "Nusret", memberImage: "/img/nusret.webp" },
];

export default function ActiveUsers() {
  return (
    <div className={"active-users-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Active Users</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {activeUsers.length !== 0 ? (
                activeUsers.map((member, index) => (
                  <Card
                    key={index}
                    variant="outlined"
                    sx={{ width: 300, borderRadius: "md", boxShadow: "sm" }}
                  >
                    <CardOverflow className="card-image">
                      <AspectRatio ratio="1/1">
                        <img src={member.memberImage} alt={member.memberNick} />
                      </AspectRatio>
                    </CardOverflow>

                    <Box sx={{ p: 0.5, textAlign: "center" }}>
                      <Typography level="title-md">
                        {member.memberNick}
                      </Typography>
                    </Box>
                  </Card>
                ))
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
