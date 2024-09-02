import image from "@/public/Image.png";
import image1 from "@/public/Image1.png";
import image2 from "@/public/Image2.png";
import image3 from "@/public/Image3.png";
import image4 from "@/public/Image4.png";

import fnp from "@/public/Trusted By/fnp.png";
import pizzabakery from "@/public/Trusted By/pizzaBakery.png";
import parisPanini from "@/public/Trusted By/parisPanini.png";
import basco from "@/public/Trusted By/BascoFry.png";

export const marqueeContent = [
  {
    image: image,
    text: "manual entry process is so time-consuming",
  },
  {
    image: image1,
    text: "why are my best-sellers always running low",
  },
  {
    image: image2,
    text: "stockouts =  unhappy customers :(",
  },
  {
    image: image3,
    text: "We end up overstocking essential items all the time",
  },
  {
    image: image4,
    text: "Why does my staff keep quitting?",
  },
];

export const trustedByBrands = [
  {
    logo: fnp,
    brandName: "ferns n petals",
  },
  {
    logo: pizzabakery,
    brandName: "the pizza bakery",
  },
  {
    logo: basco,
    brandName: "basco & fry",
  },
  {
    logo: parisPanini,
    brandName: "paris panini",
  },
];

export const faqs = [
  {
    question: "How does Interface dispute my marketplace deductions?",
    answer:
      "We integrate with your marketplaces to pull data real-time to diagnose and flag any discrepancies. We then sift through all your sources of truth to retrieve supporting documents to raise tickets efficiently and thus increase dispute win rate.",
  },
  {
    question: "Why Should I Use Interface?",
    answer:
      "Interface helps recover funds that sellers may have lost due to marketplace accounting errors. Disputing each claim on average takes up around 10-15 minutes. Save bandwidth and money by being truly hands-off and disputing via Interface",
  },
  {
    question: "How Does Interface Recover Funds?",
    answer: `
      <p>Interface recovers funds by leveraging AI designed to identify, challenge, and resolve discrepancies. Here's how:</p>
      <ol class="list-decimal pl-5 mt-4">
        <li>Interface uses distilled LLMs to scan deductions data, flagging significant payment discrepancies.</li>
        <li>Our browser agents gather and compile rebuttal packages for each flagged issue.</li>
        <li>We guide retailers through personalized dispute journeys on their preferred channels.</li>
        <li>Our agents handle all follow-ups, turning disputes into collections.</li>
      </ol>
    `,
  },
  {
    question: "What types of cases do we cover?",
    answer: `<p>We cover a wide range of discrepancies to ensure accurate reconciliations and reimbursements:</p>
<ol class="list-decimal pl-5 mt-4">
<li>Reconcile all transactions against actual stock.</li>
<li>Address lost, damaged, or destroyed items without authorisation.</li>
<li>Correct overcharges on fees.</li>
<li>Resolve inventory discrepancies, such as missing or miscounted items.</li>
Dispute incorrect reimbursements and refunds.</ol>`,
  },
];

