var root = d3.hierarchy({
  headline: "A New North Korean Missile Test Ends in Failure",
  summary: "North Korea launched a missile on Saturday, even as the United States and China have been seeking to curb the North’s military ambitions.",
  children: [{
      headline: "Tillerson Keeping ‘All Options’ Open if Diplomacy With North Korea Fails",
      summary: "Secretary of State Rex W. Tillerson said on Friday that the United States was keeping \“all options\” on the table if diplomacy failed to persuade North Korea to halt its nuclear weapons program",
      children: [{
        headline: "Exclusive: Trump says 'major, major' conflict with North Korea possible, but seeks diplomacy",
        summary: "U.S. President Donald Trump said on Thursday a major conflict with North Korea is possible in the standoff over its nuclear and missile programs, but he would prefer a diplomatic outcome to the dispute."
      }]
    },
    {
      headline: "Hand of U.S. Leaves North Korea’s Missile Program Shaken",
      summary: "When a North Korean missile test went awry on Sunday, blowing up seconds after liftoff, there were immediate suspicions that a United States program to sabotage the test flights had struck again.",
      children: [{
        headline: "Catch Me If You Can: North Korea Works to Improve Communications Security",
        summary: "North Korean scientists have developed a quantum encryption device—the basis for a communications system that is completely secure from hackers and eavesdroppers."
      }]
    },
    {
      headline: "North Korea Claims Progress on Long-Range Goal With Missile Test",
      summary: "North Korea claimed on Monday that it had successfully tested a new type of nuclear-capable missile, one that uses a solid-fuel technology that American experts say will make it easier for the country to hide its arsenal underground and roll its missiles out for quick launch.",
      children: [{
        headline: "5 Days After Failed Missile Test by North Korea, Another Failure",
        summary: "North Korea launched an intermediate-range ballistic missile on Thursday, but the test ended in failure, the United States military said."
      }]
    },
    {
      headline: "North Korea’s Launch of Ballistic Missiles Raises New Worries - The New York Times",
      summary: "The missiles took off from Tongchang-ri, in northwest North Korea, and flew an average of 620 miles before falling into the sea between North Korea and Japan, said Noh Jae-chon, a South Korean military spokesman."
    }
  ]
});
