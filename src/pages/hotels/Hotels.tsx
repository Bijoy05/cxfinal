"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const Hotels: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-4xl p-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Inventory and Stock Recommendations</h1>

      {/* Overview Section */}
      <h2 className="text-2xl font-bold mb-4">Flight 179</h2>
      
      {/* Filter Overview Section */}
      <h2 className="text-lg font-semibold mb-2">Filter Overview</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div>
          <p className="text-gray-500">Flight Date</p>
          <p>05/11/24</p>
        </div>
        <div>
        <p className="text-gray-500">Passengers</p>
        <p>230</p>
        </div>
        <div>
          <p className="text-gray-500">Flight Route</p>
          <p>LAX to JFK</p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label className="block font-semibold mb-1" htmlFor="flightNumber">
            Flight Number
          </label>
          <select
            id="flightNumber"
            className="w-full p-3 bg-white border border-gray-300 rounded-lg"
          >
            <option value="">Select Flight Number</option>
            {[
              "CX100",
              "CX104",
              "CX139",
              "CX157",
              "CX163",
              "CX198",
              "CX253",
              "CX254",
              "CX257",
              "CX411",
            ].map((flight) => (
              <option key={flight} value={flight}>
                {flight}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block font-semibold mb-1" htmlFor="dateRange">
            Date Range
          </label>
          <select
            id="dateRange"
            className="w-full p-3 bg-white border border-gray-300 rounded-lg"
          >
            <option value="">Select Date Range</option>
            <option value="last_week">Last Week</option>
            <option value="last_month">Last Month</option>
            <option value="last_year">Last Year</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block font-semibold mb-1" htmlFor="classFilter">
            Class
          </label>
          <select
            id="classFilter"
            className="w-full p-3 bg-white border border-gray-300 rounded-lg"
          >
            <option value="">Select Class</option>
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </select>
        </div>
      </div>

      {/* Recommendations Table */}
      <h2 className="text-xl font-semibold mb-3">Recommendations</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow">
          <thead>
            <tr className="border-b bg-purple-200">
              <th className="py-3 px-4 text-left font-bold text-gray-600">Meal Item</th>
              <th className="py-3 px-4 text-left font-bold text-gray-600">Current Stock</th>
              <th className="py-3 px-4 text-left font-bold text-gray-600">Recommended Stock</th>
              <th className="py-3 px-4 text-left font-bold text-gray-600">Predicted Waste Reduction</th>
              <th className="py-3 px-4 text-left font-bold text-gray-600">Estimated Savings</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                meal: "Chicken Curry with Rice",
                currentStock: 90,
                recommendedStock: 130,
                wasteReduction: "0 lbs",
                savings: "$0",
              },
              {
                meal: "Mushroom Noodles With Potatoes",
                currentStock: 120,
                recommendedStock: 80,
                wasteReduction: "40 lbs",
                savings: "$100",
              },
              {
                meal: "Beef Steak with Potatoes",
                currentStock: 110,
                recommendedStock: 90,
                wasteReduction: "10 lbs",
                savings: "$40",
              }
            ].map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{item.meal}</td>
                <td className="py-3 px-4">{item.currentStock}</td>
                <td className="py-3 px-4">{item.recommendedStock}</td>
                <td className="py-3 px-4">{item.wasteReduction}</td>
                <td className="py-3 px-4">{item.savings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hotels;
