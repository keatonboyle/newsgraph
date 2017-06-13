var edges = [
  [undefined, 'https://www.nytimes.com/interactive/2017/04/28/us/politics/trump-savings-tax-plan.html'],
  ['https://www.nytimes.com/interactive/2017/04/28/us/politics/trump-savings-tax-plan.html',
    'https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html'
  ],
  ['https://www.nytimes.com/interactive/2017/04/28/us/politics/trump-savings-tax-plan.html',
    'https://www.nytimes.com/interactive/2017/03/14/us/politics/document-Donald-Trump-2005-Tax.html'
  ],
  ['https://www.nytimes.com/interactive/2017/04/28/us/politics/trump-savings-tax-plan.html',
    'https://www.bloomberg.com/billionaires/profiles/donald-j-trump/'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/2017/03/15/business/economy/trump-alternative-minimum-tax.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/2017/04/26/business/economy/trump-tax-plan-repatriation.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/interactive/2017/04/26/us/politics/what-trumps-tax-proposal-will-cost.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/2017/04/29/arts/television/samantha-bee-not-white-house-correspondents-dinner.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/2017/04/29/us/politics/trump-rally-pennsylvania.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/2017/04/29/arts/television/veep-matt-walsh-sean-spicer.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/2017/04/29/us/politics/peoples-climate-march-trump.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/2017/04/26/us/politics/white-house-tax-plan.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/2017/04/26/us/politics/trump-tax-plan-budget-deficit.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/2017/04/26/upshot/winners-and-losers-in-the-trump-tax-plan.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/2017/04/25/us/politics/white-house-economic-policy-arthur-laffer.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/2017/04/26/us/politics/white-house-tax-plan.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/2017/04/26/us/politics/trump-tax-plan-budget-deficit.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/2017/04/26/upshot/winners-and-losers-in-the-trump-tax-plan.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/trump-tax-cut-plan.html',
    'https://www.nytimes.com/2017/04/25/us/politics/white-house-economic-policy-arthur-laffer.html'
  ],
  ['https://www.nytimes.com/interactive/2017/03/14/us/politics/document-Donald-Trump-2005-Tax.html',
    'https://www.nytimes.com/2017/03/14/us/politics/donald-trump-taxes.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html',
    'http://mobile.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html',
    'https://docs.google.com/forms/d/e/1FAIpQLSfLW30xgZodF1qRAg80oWEGuDpW-1HHaL0g42G3SmvB2f4lCw/viewform'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html',
    'https://www.nytimes.com/2017/04/29/arts/television/samantha-bee-not-white-house-correspondents-dinner.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html',
    'https://www.nytimes.com/2017/04/29/us/politics/trump-rally-pennsylvania.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html',
    'https://www.nytimes.com/2017/04/29/arts/television/veep-matt-walsh-sean-spicer.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html',
    'https://www.nytimes.com/2017/04/29/us/politics/peoples-climate-march-trump.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html',
    'https://www.nytimes.com/2017/04/26/upshot/what-changed-in-the-health-repeal-plan-to-win-over-the-freedom-caucus.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html',
    'https://www.nytimes.com/2017/04/20/us/politics/affordable-care-act-house-republicans-trump.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html',
    'https://www.nytimes.com/2017/04/15/us/politics/republicans-health-care-bill-medical-malpractice-suits.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html',
    'https://www.nytimes.com/2017/04/13/us/politics/health-care-affordable-care-act-trump.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html',
    'https://www.nytimes.com/2017/04/26/upshot/what-changed-in-the-health-repeal-plan-to-win-over-the-freedom-caucus.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html',
    'https://www.nytimes.com/2017/04/20/us/politics/affordable-care-act-house-republicans-trump.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html',
    'https://www.nytimes.com/2017/04/15/us/politics/republicans-health-care-bill-medical-malpractice-suits.html'
  ],
  ['https://www.nytimes.com/2017/04/26/us/politics/affordable-care-act-health-republicans.html',
    'https://www.nytimes.com/2017/04/13/us/politics/health-care-affordable-care-act-trump.html'
  ],
  ['https://www.nytimes.com/2017/03/15/business/economy/trump-alternative-minimum-tax.html',
    'http://mobile.nytimes.com/2017/03/15/business/economy/trump-alternative-minimum-tax.html'
  ],
  ['https://www.nytimes.com/2017/03/15/business/economy/trump-alternative-minimum-tax.html',
    'https://www.nytimes.com/2017/03/14/us/politics/donald-trump-taxes.html'
  ],
  ['https://www.nytimes.com/2017/03/15/business/economy/trump-alternative-minimum-tax.html',
    'https://docs.google.com/forms/d/e/1FAIpQLSfLW30xgZodF1qRAg80oWEGuDpW-1HHaL0g42G3SmvB2f4lCw/viewform'
  ],
  ['https://www.nytimes.com/2017/03/15/business/economy/trump-alternative-minimum-tax.html',
    'https://www.nytimes.com/2017/03/15/us/politics/trump-calls-2005-tax-return-release-fake-news.html'
  ],
  ['https://www.nytimes.com/2017/03/15/business/economy/trump-alternative-minimum-tax.html',
    'https://www.nytimes.com/2017/03/14/us/politics/donald-trump-taxes.html'
  ],
  ['https://www.nytimes.com/2017/03/15/business/economy/trump-alternative-minimum-tax.html',
    'https://www.nytimes.com/2016/11/01/us/politics/donald-trump-tax.html'
  ],
  ['https://www.nytimes.com/2017/03/15/business/economy/trump-alternative-minimum-tax.html',
    'https://www.nytimes.com/2017/03/15/us/politics/trump-calls-2005-tax-return-release-fake-news.html'
  ],
  ['https://www.nytimes.com/2017/03/15/business/economy/trump-alternative-minimum-tax.html',
    'https://www.nytimes.com/2017/03/14/us/politics/donald-trump-taxes.html'
  ],
  ['https://www.nytimes.com/2017/03/15/business/economy/trump-alternative-minimum-tax.html',
    'https://www.nytimes.com/2016/11/01/us/politics/donald-trump-tax.html'
  ],
  ['https://www.nytimes.com/2017/04/26/business/economy/trump-tax-plan-repatriation.html',
    'https://dealbook.nytimes.com/2014/03/05/obama-budget-seeks-to-eliminate-inversions/'
  ],
  ['https://www.nytimes.com/2017/04/26/business/economy/trump-tax-plan-repatriation.html',
    'https://www.nytimes.com/interactive/2017/04/26/us/politics/what-trumps-tax-proposal-will-cost.html'
  ],
  ['https://www.nytimes.com/2017/04/26/business/economy/trump-tax-plan-repatriation.html',
    'https://www.nytimes.com/2017/04/26/us/politics/white-house-tax-plan.html'
  ],
  ['https://www.nytimes.com/2017/04/26/business/economy/trump-tax-plan-repatriation.html',
    'https://www.nytimes.com/2017/04/25/business/economy/trump-business-tax-market-reaction.html'
  ],
  ['https://www.nytimes.com/2017/04/26/business/economy/trump-tax-plan-repatriation.html',
    'https://www.nytimes.com/2016/11/06/your-money/strategies-corporate-cash-repatriation-bipartisan-consensuss.html'
  ],
  ['https://www.nytimes.com/2017/04/26/business/economy/trump-tax-plan-repatriation.html',
    'https://www.nytimes.com/2017/04/26/us/politics/white-house-tax-plan.html'
  ],
  ['https://www.nytimes.com/2017/04/26/business/economy/trump-tax-plan-repatriation.html',
    'https://www.nytimes.com/2017/04/25/business/economy/trump-business-tax-market-reaction.html'
  ],
  ['https://www.nytimes.com/2017/04/26/business/economy/trump-tax-plan-repatriation.html',
    'https://www.nytimes.com/2016/11/06/your-money/strategies-corporate-cash-repatriation-bipartisan-consensuss.html',
  ]
];

var root = d3.stratify()
  .id(function(d) {
    return d[1];
  })
  .parentId(function(d) {
    return d[0];
  })
  (edges);
