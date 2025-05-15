import { Box, Avatar, Typography, Container } from '@mui/material';
import getInitials from '../utilities.js';

const Profile = ({ user }) => {

  let initials = "?";
  if (user) {
    initials = getInitials(user);
  }

  return (
    <>
      {!user ? <h2>Hmmm... Seems like you're not logged in. Try <a href="/login">HERE</a>.</h2>
        :
        <div>
          <Container>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Avatar
                sx={{
                  width: 200,
                  height: 200,
                  marginBottom: { xs: 2, sm: 0 },
                  marginRight: { sm: 2 },
                }}
                src={user.profileUrl}
              >{initials}</Avatar>
              <Typography variant="h4" sx={{ textAlign: 'bottom', color: '#223843' }}>
                {user.username}
              </Typography>
            </Box>
            <br />
            <hr />
          </Container>
        </div>
      }
    </>
  )
}
export default Profile;