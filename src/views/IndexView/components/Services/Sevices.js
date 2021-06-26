import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, colors } from '@material-ui/core';
import { IconAlternate, SectionHeader } from 'components/molecules';
import { DescriptionListIcon, Section } from 'components/organisms';

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
  noPaddingBottom: {
    paddingBottom: 0,
  },
  noPaddingTop: {
    paddingTop: 0,
  },
}));

const data = [
  {
    icon: 'fas fa-braille',
    title: 'Ppoulation Sequencing',
    subtitle:
      'Long-read sequencing technologies have now reached a level of accuracy and yield that allows their application to variant detection at a scale of tens to thousands of samples. Concomitant with the development of new computational tools, the first population-scale studies involving long-read sequencing have emerged over the past 2 years and, given the continuous advancement of the field, many more are likely to follow. Learn more about our role in this area.',
  },
  {

    icon: 'fas fa-dna',
    title: 'Rare Genetic Disorder',
    subtitle:
      'On average, the long search for a rare disease diagnosis—the “diagnostic odyssey”—takes 5 to 7 years,6 8 physicians, and 2 to 3 misdiagnoses. Given that 80% of rare diseases are genetic or have a genetic component, comprehensive genomic sequencing increases the potential of uncovering an underlying etiology in patients. Next-generation sequencing (NGS) offers the highest likelihood of rare disease diagnosis and the fastest path to ending the diagnostic odyssey.',
  },
  {
    icon: 'fas fa-diagnoses',
    title: 'Oncology',
    subtitle:
      "Technology is once again transforming our understanding of cancer’s origins and complexity. Instead of broad categorizations based on the location of tumours, genome sequencing is providing detailed characterizations of the combination of genetic mutations that trigger or aid cancer development in an individual.Understanding the biological basis of disease can lead to better care and targeted treatment, with evidence-based outcomes.",
  },
];
const Services = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      The Future is Now for&nbsp;
      <Typography component="span" variant="inherit" color="primary">Rare Disease Genomics</Typography>
    </Typography>
  );

  const subtitle = 'Committed to ending diagnostic odysseys for rare disease';

  return (
    <div className={className} {...rest}>
      <Section narrow className={classes.noPaddingBottom}>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleProps={{
            variant: 'h2',
            color: 'textPrimary',
          }}
          data-aos="fade-up"
        />
      </Section>
      <Section className={classes.noPaddingTop}>
        <Grid container spacing={isMd ? 4 : 2}>
          {data.map((item, index) => (
            <Grid key={index} item xs={12} sm={4} data-aos={'fade-up'}>
              <DescriptionListIcon
                title={item.title}
                subtitle={item.subtitle}
                icon={
                  <IconAlternate
                    fontIconClass={item.icon}
                    size="medium"
                    color={colors.blueGrey}
                  />
                }
                align="left"
              />
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Services;
