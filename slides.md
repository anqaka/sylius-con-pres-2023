---
theme: ./
author: 'Ania Karoń'
position: 'Accessibility Specialist'
position2: '& Senior Frontend Developer'
email: 'anna.karon@snow.dog'
profilePicture: '/anna-karon-photo.jpg'
linkedin: 'https://www.linkedin.com/in/anna-karon/'
highlighter: shiki
lineNumbers: false
hideInToc: true
mdc: true
---

# Let me shop with ease!

Accessibility myths in e-commerce


---
layout: aboutme
class: "text-left"
hideInToc: true
---

---
layout: center
class: "text-center"
hideInToc: true
---

# Table of contents
<Toc />


---
layout: two-cols
---

# Accessibility

## What Web accessibility is?

<v-click>

Web accessibility (A11y) is the inclusive practice of ensuring that there are no barriers that prevent interaction with a website or an app. So a website is operable and available for all users, no matter what their conditions are.

</v-click>

<v-click>

<img src="/curb-cut.jpg" alt="4 users - on a wheelchair, with stroller, on a bike, on a skate" />

</v-click>

::right::

<img src="/accessibility.svg" alt="" class="h-100" />


---
layout: center
class: text-center
---

# Users

<div class="relative">
<v-click>
<Card>Accessibility only affects a small group of users</Card>
</v-click>
<v-click>
<Card position="right">Accessibility only affects blind users</Card>
</v-click>
<v-click>
<False />
</v-click>
</div>


---
layout: none
---

<style>
.grid-container {
    grid-template-rows: calc(50% - 12px) calc(50% - 12px);
    max-height: 100%;
}

.item-image {
  overflow: hidden;
}

.item-image img {
  height: 100%;
  object-fit: cover;
}
</style>

<div grid grid-cols-2 gap-6 class="grid-container">
  <v-click>
    <div flex flex-col relative items-center class="item">
      <p class="my-2">User with disabilities</p>
      <div class="item-image">
        <img src="/disabled.jpg" alt="an athlete running with prosthetic legs" />
      </div>
    </div>
  </v-click>
  <v-click>
    <div flex flex-col relative items-center class="item">
      <p class="my-2">Older users</p>
      <div class="item-image">
        <img src="/elder_ppl.jpg" alt="dancing elderly couple" />
      </div>
    </div>
  </v-click>
  <div class="absolute w-full h-full px-6 flex flex-col justify-center bg-darkPrimary" v-click="[3, 4]">
    <img src="/ecommerce-user-by-age.png" alt="Percentage of users who bought or ordered goods or services for private use in the previous 12 months by age group, EU, 2010-2022, Group age 55-74 - a grow from 45% in 2010 to 59% in 2022" />
  </div>
  <v-click>
    <div flex flex-col relative items-center class="item">
      <p class="my-2">Neurodiversity</p>
      <div class="item-image">
        <img src="/brain.jpg" alt="brain, one half filled with multicolored spots, the other with mathematical patterns" />
      </div>
    </div>
  </v-click>
  <v-click>
    <div flex flex-col relative items-center class="item">
      <p class="my-2">Users under temporary limitations</p>
      <div class="item-image flex">
        <img src="/man-phone.jpg" alt="walking men with smartphone carrying a child" />
        <img src="/woman-phone.jpg" alt="woman driving bicycle, looking at her smartphone" />
      </div>
    </div>
  </v-click>
</div>

<!--
1. different types of disabilities;
2. prevalence of disability increases with age -->

---
layout: two-cols
hideInToc: true
---

# Europe, 2022

<v-clicks>

* Population: 585.1 million
* Internet users - 92% of population: 537.692&nbsp;million
* 76% of internet users shop online: 408.6&nbsp;million
* ~15% users with disabilities: 61.29&nbsp;million
* ~13% older users (+55): 53.118&nbsp;million
* ~20% neurodiverse users: 81.72&nbsp;million
* users under some temporary limitation: ??

</v-clicks>

<v-click>

196.13&nbsp;million ??? 🤔

</v-click>



::right::

<img src="/europe.png" alt="Map of europe" />

<v-clicks>

<p>Total sales: €899 billion</p>
<p>20% = €179.8 billion</p>

</v-clicks>


---
layout: center
class: text-center
hideInToc: true
---

<div class="relative">
<Card v-click="1">Users with disabilities don't use my website</Card>
<False v-click="3" />
</div>


<p v-click="2">How do you now?</p>


<!--
1. Do you have any data? Do you know how many user browse your website using assistive technologies?
2. Do you need how many of your users may need accessibility features?
3. Information about AT usage it's not shared with analytics, it's not detected
4. Not only users with disabilities use accessibility features! -->

---
layout: two-cols-header
hideInToc: true
---

# Accessible means for everyone?

<div v-click="[1, 2]">

## Mission impossible?

</div>

::left::

<v-clicks>

* universal design with proper color contrast
* clear, comprehensive UI, simple navigation
* alternative version of media (captions, alt text for images)
* support for assistive technologies
* customization settings

</v-clicks>


::right::

<div class="p-12" v-click="2">
  <img src="/mission-impossible.jpg" alt="scene from Mission Impossible movie - Tom Cruise Tom Cruise hanging in the air over a computer" />
</div>


---
layout: center
class: text-center
---

# Responsibility

<div class="relative">

<v-clicks>

<Card>Only accessibility experts can implement accessibility fixes</Card>
<Card position="right">Accessibility is developers responsibility</Card>

</v-clicks>

<v-click>

<False />

</v-click>

</div>




---
layout: center
---


<div class="relative p-20">
  <img src="/development-process.jpg" alt="Software development process composed from 6 parts: Management (Planning, analysis, define requirements), Design, Development, Testing, Deployment, Maintenance"/>
  <div class="absolute w-[150px] z-10 bottom-20 right-0">
    <img src="/frodo-ring.jpeg" alt="Frodo, a hero of Lord of the Ring with a ring on his hand" v-click="[1, 2]" class="absolute" />
    <img src="/specialist-icon.svg" alt="man with glasses and with gear" v-click="[2, 3]" />
  </div>
</div>



---
class: text-center
---

# Implementation

<v-clicks>

<Card>We can quickly add accessibility before the release</Card>

<Card position="right">Accessibility is like a feature - you do it once and then you have it</Card>

<Card>Accessibility can be fixed by the accessibility overlay</Card>


</v-clicks>

<v-click>

<False />

</v-click>


<!-- 1. Won't work. Maybe easy things such as alternative text or form labeling may be added at the end, but some complex UX components should be planned to be accessible. In some cases, making features accessible at the end of development process may require the full refactoring.
2. To be accessible you need to check and monitor your accessibility. It can be broken easily by updating the content or implementing a new feature
3. A11y overlay it's a plugin that in theory helps users adjust your site and use assistive technologies easily. The practice is different - it enables some customization that already available in your system settings (colors contrast, font size etc) and it cannot fix serious a11y issues - link missing alt text or wrong semantics. It can also violate the privacy policy by collecting user data without their consent and can break default assistive technology navigation.
-->

---
layout: center
class: text-center
---

# Testing & Auditing

<br/>

<div class="relative">
  <v-click>
    <Card>A11y automatic tests (online checker) passed, my website is accessible </Card>
  </v-click>
  <v-click>
    <False />
  </v-click>
</div>

<br />

<v-clicks>

* automatic tests
* manual tests (keyboard support, screen reader support)
* user testing (user with disabilities)

</v-clicks>

<v-click>
<Card position="right">Accessibility audit will resolve the problem</Card>
</v-click>


---
layout: two-cols-header
---

# Legal requirements

::left::

<div w-15 mb-4>
  <img src="/flag-eu.png" alt="EU flag" />
</div>

## European Accessibility Act (EAA)

<p mb-8>The European Accessibility Act is new legislation which was brought in by the European Union (EU) in 2019 with the aim to make sure that products and services are more accessible. This law focuses on private sector organizations selling products or services to customers that live in EU. <br/> EU member states must enforce their digital accessibility laws by June 28, 2025. </p>

::right::

<br/>
<br/>


<v-clicks>

* private sector organizations selling to EU customers
* Implementation deadline: 28th June 2025
* Websites, mobile apps, digital devices (ticket kiosks, ATM’s, Smart TV's...)

</v-clicks>


---
layout: two-cols-header
---

# A11y Benefits

::left::

<v-click>

* More inclusive user experience
* Increase market reach
* Improve brand reputation
* Reduce the risk of lawsuit
* Enhance SEO

</v-click>

<br />
<br />
<br />
<br />
<br />
<br />


::right::

<v-click>

<img src="/win-win.jpeg" alt="Children happy with success in front of the computer" />

</v-click>


---
layout: two-cols
---

# Resources

<ul>
  <li>
    <a href="https://www.eurocommerce.eu/app/uploads/2023/09/2023-european-e-commerce-report-light-version-final-19-sep.pdf" target="_blank">European e-commerce report 2023 (light version)</a>
  </li>
  <li>
    <a href="https://www.w3.org/WAI/policies/" target="_blank">Web Accessibility Laws & Policies (W3C)</a>
  </li>
  <li>
    <a href="https://www.craigabbott.co.uk/blog/european-accessibility-act-what-you-need-to-know/" target="_blank">European Accessibility Act: What you need to know</a>
  </li>
  <li>
    <a href="https://overlayfactsheet.com/" target="_blank">Accessibility Overlay Fact Sheet</a>
  </li>
</ul>

::right::

<div class="p-4 w-1/2">
  <img src="/qr-code-pres.png" alt="qr code to slides" />
</div>

<a href="https://sylius-con-pres-2023.vercel.app/" target="_blank">https://sylius-con-pres-2023.vercel.app/</a>

---
layout: thankyou

---
