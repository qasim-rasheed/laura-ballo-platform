import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "icon",
      title: "Icon Type",
      type: "string",
      options: {
        list: [
          { title: "Training (Users)", value: "Users" },
          { title: "Coaching (Brain)", value: "Brain" },
          { title: "Speaking (Mic)", value: "Mic" },
          { title: "Language (Book)", value: "Book" },
        ],
      },
    }),
  ],
});
