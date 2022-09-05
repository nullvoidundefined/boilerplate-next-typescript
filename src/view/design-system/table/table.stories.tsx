import { ComponentStory, ComponentMeta } from "@storybook/react";
import { createColumnHelper } from "@tanstack/react-table";
import { Person } from "../../../type";

import { VibeTable } from "./table";

export default {
    title: "Design-System/Table",
    component: VibeTable,
} as ComponentMeta<typeof VibeTable>;

const data: Person[] = [
    {
        firstName: "tanner",
        lastName: "linsley",
        age: 24,
        visits: 100,
        status: "In Relationship",
        progress: 50,
    },
    {
        firstName: "tandy",
        lastName: "miller",
        age: 40,
        visits: 40,
        status: "Single",
        progress: 80,
    },
    {
        firstName: "joe",
        lastName: "dirte",
        age: 45,
        visits: 20,
        status: "Complicated",
        progress: 10,
    },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
    columnHelper.accessor("firstName", {
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.lastName, {
        id: "lastName",
        cell: (info) => <i>{info.getValue()}</i>,
        header: () => <span>Last Name</span>,
        footer: (info) => info.column.id,
    }),
    columnHelper.accessor("age", {
        header: () => "Age",
        cell: (info) => info.renderValue(),
        footer: (info) => info.column.id,
    }),
    columnHelper.accessor("visits", {
        header: () => <span>Visits</span>,
        footer: (info) => info.column.id,
    }),
    columnHelper.accessor("status", {
        header: "Status",
        footer: (info) => info.column.id,
    }),
    columnHelper.accessor("progress", {
        header: "Profile Progress",
        footer: (info) => info.column.id,
    }),
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VibeTable> = (args) => (
    <VibeTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    columns: columns,
    data: data,
};
