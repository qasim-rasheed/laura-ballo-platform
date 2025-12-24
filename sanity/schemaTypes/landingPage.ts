import { defineField, defineType } from "sanity";

export const landingPage = defineType({
  name: "landingPage",
  title: "Home Page Content",
  type: "document",
  fields: [
    defineField({
      name: "heroHeading",
      title: "Hero Headline",
      type: "string",
      initialValue: "Master the Art of Conflict Resolution",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubheading",
      title: "Hero Subtext",
      type: "text",
      initialValue:
        "Transition from manager to visionary leader. I help organizations navigate complexity through emotional intelligence and strategic negotiation.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "methodologyTitle",
      title: "Methodology Title",
      type: "string",
      initialValue: "Méthode Résonance©",
    }),
    defineField({
      name: "frenchCoachingText",
      title: "French Coaching Description",
      type: "text",
      initialValue: "Combine leadership development with linguistic mastery.",
    }),
  ],
});
