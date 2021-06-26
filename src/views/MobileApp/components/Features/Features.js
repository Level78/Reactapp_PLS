import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,

  Grid,
  List,
  ListItem,


  Typography,

} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  coverImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
    },
  },
  avatar: {
    width: 60,
    height: 60,
    marginLeft: theme.spacing(-2),
    border: `4px solid ${theme.palette.background.paper}`,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    '&:first-child': {
      marginLeft: 0,
    },
  },
}));

const Features = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  // const { people } = data;

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Grid container spacing={isMd ? 4 : 2}>

            <Grid item xs={12} md={6} data-aos="fade-up">


            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={isMd ? 4 : 2}
            direction={isMd ? 'row' : 'column-reverse'}
          >
            <Grid item xs={12} md={6} data-aos="fade-up">
              <SectionHeader
                label="OUR PARTNERs"
                title={
                  <span>
                    <Typography color="# 4a7895  " variant="inherit" component="span">Our Customers</Typography>{' '}
                    Around the globe
                  </span>
                }
                subtitle="Hi ! Team premas  add content to this part of webapp to rank hugh on seo."
                align="left"
                disableGutter
              />
              <List disablePadding>
                <ListItem disableGutters data-aos="fade-up">
                  <Typography variant="body1">
                    Constantly use tags to scale up on serach engine
                  </Typography>
                </ListItem>

                <ListItem disableGutters data-aos="fade-up">
                  <Typography variant="body1">
                    Use high quality images to keep consistent theme
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={12}
              md={6}
              data-aos="fade-up"
            >
              <Image
                src="https://assets.maccarianagency.com/the-front/illustrations/connected-world.svg"
                alt="..."
                className={classes.coverImage}
                lazy={false}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default Features;
