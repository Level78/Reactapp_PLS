import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';


const useStyles = makeStyles(theme => ({
  price: {
    color: theme.palette.text.primary,
    fontSize: 32,
    fontWeight: 'normal',
    [theme.breakpoints.up('md')]: {
      fontSize: 48,
    },
  },
  disclimer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1 / 2, 1),
    background: theme.palette.alternate.main,
    display: 'inline-block',
  },
  image: {
    maxWidth: 600,
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 2 : 4}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <SectionHeader
            title="The power of illumina sequencing now more accesible than ever."
            subtitle={<span className={classes.price}>MINISEQ SYSTEM</span>}
            ctaGroup={[
              <Button variant="contained" color="" size="large">
                Explore QuickBook
              </Button>,
            ]}
            align="left"
            data-aos="fade-up"
            titleVariant="h3"
          />
          <div className={classes.disclimer} data-aos="fade-up">
            <Typography variant="subtitle1" color="textSecondary">
              Supports a broad range of DNA and RNA sequencing*
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          container
          justify="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://ik.imagekit.io/j6phbjneuop/premasweb/MiniSeq_Hires_RbU2DFe6B.png"
            srcSet="https://ik.imagekit.io/j6phbjneuop/premasweb/MiniSeq_Hires_RbU2DFe6B.png"
            alt="MINISEQ SYSTEM"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
