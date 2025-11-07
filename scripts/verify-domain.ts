/**
 * Script to verify your domain with Resend
 * 
 * Run this with: npx tsx scripts/verify-domain.ts
 * 
 * First, add your domain in the Resend dashboard:
 * 1. Go to https://resend.com/domains
 * 2. Click "Add Domain"
 * 3. Enter "surenbuilds.com"
 * 4. Add the DNS records they provide to your domain
 * 
 * Then run this script to verify the domain is set up correctly.
 */

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyDomain() {
  try {
    // List all domains
    const { data: domains, error } = await resend.domains.list();
    
    if (error) {
      console.error("Error listing domains:", error);
      return;
    }

    console.log("Your Resend domains:");
    console.log(JSON.stringify(domains, null, 2));

    // Find surenbuilds.com domain
    const surenbuildsDomain = domains?.data?.find(
      (domain) => domain.name === "surenbuilds.com"
    );

    if (surenbuildsDomain) {
      console.log("\n✅ Found surenbuilds.com domain!");
      console.log("Domain ID:", surenbuildsDomain.id);
      console.log("Status:", surenbuildsDomain.status);
      
      if (surenbuildsDomain.status === "verified") {
        console.log("✅ Domain is verified and ready to use!");
      } else {
        console.log("⚠️  Domain is not yet verified. Please add the DNS records.");
        
        // Get domain details to see DNS records needed
        const { data: domainDetails } = await resend.domains.get(surenbuildsDomain.id);
        console.log("\nDNS Records needed:");
        console.log(JSON.stringify(domainDetails, null, 2));
      }
    } else {
      console.log("\n❌ surenbuilds.com domain not found.");
      console.log("Please add it in the Resend dashboard: https://resend.com/domains");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

verifyDomain();


