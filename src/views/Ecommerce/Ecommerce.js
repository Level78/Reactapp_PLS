import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

import { Section, SectionAlternate, } from 'components/organisms';
import {

  FeaturedProducts,
  Hero,

  News,
  Newsletter,
  Overview,


  Reviews,

} from './components';

import {


  news,

  reviews,
} from './data';

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionFeaturedProducts: {
    background: theme.palette.secondary.main,
  },
  reviewSection: {
    background: theme.palette.primary.dark,
  },
}));

const Ecommerce = () => {
  const classes = useStyles();

  return (
    <div>
      <Section className={classes.pagePaddingTop}>
        <Hero />
      </Section>


      <Divider />





      <Section className={classes.sectionNoPaddingTop}>
        <Overview />
      </Section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <SectionAlternate>

        <FeaturedProducts />
      </SectionAlternate>
      {/* <Section>
        <Products data={featuredProducts} />
      </Section>
      <SectionAlternate>
        <Sales data={mostSoldProducts} />
      </SectionAlternate> */}
      <Section>
        <News data={news} />
      </Section>
      {/* <Section className={classes.sectionNoPaddingTop}>
        <LatestProducts data={latestProducts} />
      </Section> */}
      {/* <Section className={classes.sectionNoPaddingTop}>
        <QuickSearch />
      </Section> */}
      <SectionAlternate >
        <Reviews data={reviews} />
      </SectionAlternate>
      <Section>
        <Newsletter />
      </Section>
    </div>
  );
};

export default Ecommerce;
