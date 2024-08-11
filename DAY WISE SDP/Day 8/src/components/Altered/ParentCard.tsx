import * as React from "react";
import { FaHome, FaBriefcase, FaUsers, FaDollarSign, FaShippingFast, FaCode, FaProjectDiagram, FaSuitcase, FaChartLine } from "react-icons/fa";
import { CardWithForm } from "./CardWithForm";

export function ParentCard() {
  return (
    <div className="flex flex-wrap gap-3 p-4 bg-primary justify-center items-center">
      <CardWithForm Icon={FaHome} label="Remote" />
      <CardWithForm Icon={FaBriefcase} label="MNC" />
      <CardWithForm Icon={FaUsers} label="HR" />
      <CardWithForm Icon={FaDollarSign} label="Sales" />
      <CardWithForm Icon={FaShippingFast} label="Supply Chain" />
      <CardWithForm Icon={FaCode} label="Software & IT" />
      <CardWithForm Icon={FaProjectDiagram} label="Project Mgmt" />
      <CardWithForm Icon={FaSuitcase} label="Internship" />
      <CardWithForm Icon={FaChartLine} label="Analytics" />
    </div>
  );
}
