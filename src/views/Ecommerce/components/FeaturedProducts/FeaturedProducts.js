import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  image: {
    maxWidth: 390,
    height: 'auto',
    position: 'absolute',
    bottom: '-164px',
    right: 0,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

const FeaturedProducts = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between">
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <SectionHeader

            subtitle="Go where discoveries are made. Accelerate your science with immense sequencing breadth and depth when you need it. All on one instrument."
            subtitleColor="textSecondary"
            ctaGroup={[
              <Button variant="contained" color="default" size="large">
                Explore Novaseq600
              </Button>,
            ]}
            align="left"
            data-aos="fade-up"
            disableGutter
          />
        </Grid>
      </Grid>
      <br />
      <Image
        src="https://ik.imagekit.io/j6phbjneuop/premasweb/NovaSeq_VLM5h2DA1.png"
        srcSet="https://ik.imagekit.io/j6phbjneuop/premasweb/NovaSeq_VLM5h2DA1.png"
        alt="Headphones"
        className={classes.image}
        data-aos={'fade-up'}
      />
    </div>
  );
};

FeaturedProducts.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default FeaturedProducts;
