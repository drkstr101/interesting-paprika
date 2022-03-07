---
title: Contact
layout: PageLayout
sections:
  - colors: colors-h
    elementId: ''
    title: Need support?
    items:
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-32
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: left
      actions:
        justifyContent: flex-start
    type: SupportSection
    subtitle: We can help!
  - elementId: ''
    colors: colors-h
    backgroundSize: full
    title: Contact us
    text: |
      We look forward to working with you.
    form:
      type: FormBlock
      variant: variant-a
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          label: Name
          placeholder: Your name
          isRequired: 'true'
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          isRequired: 'true'
          width: 1/2
        - type: TextFormControl
          name: subject
          label: Brief subject line
          placeholder: 'Contact sales, general inquiry, legal contact, just spam etc...'
          isRequired: 'false'
          width: full
        - type: CheckboxFormControl
          name: updates
          label: Sign me up to receive updates
          isRequired: 'false'
          width: full
      submitLabel: Send Message
    media:
      type: ImageBlock
      url: /images/scott-graham-5fNmWej4tAA-unsplash.jpg
      altText: Contact form image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
    type: ContactSection
  - type: ContactSection
    colors: colors-f
    backgroundSize: inset
    title: Get early access
    text: >
      Sign up your team today to be the first to try out our new product to
      increae your team’s productivity
    form:
      type: FormBlock
      variant: variant-b
      elementId: contact-form
      destination: ''
      action: /.netlify/functions/submission_created
      fields:
        - name: email
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
      submitLabel: Sign Up
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-24
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: xx-large
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      text:
        textAlign: center
---
