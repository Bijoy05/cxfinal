"use client";
// after pasting
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

// Import images from the assets folder
import BeefPastramiSaladImage from "@/assets/beefpastramisalad.jpeg";
import SteamedPorkImage from "@/assets/steamedpork.jpeg";


const wasteByMealServiceData = {
  labels: ["Chicken Rice", "Shrimp Noodles", "Caesar Salad"],
  datasets: [
    {
      label: "Waste (%)",
      data: [20, 25, 34],
      backgroundColor: "rgba(255, 99, 132, 0.8)", // Solid color
    },
  ],
};

const wasteByFoodCategoryData = {
  labels: ["Low Carb", "High Protein", "Vegetables"],
  datasets: [
    {
      label: "Waste (%)",
      data: [15, 30, 25],
      backgroundColor: "rgba(54, 162, 235, 0.8)", // Solid color
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 40,
    },
  },
};


export const Rooms: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-3xl p-4">
      <h1 className="text-2xl font-bold mb-4">Flight 179</h1>
      
      {/* Filter Overview Section */}
      <h2 className="text-lg font-semibold mb-2">Filter Overview</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <p className="text-gray-500">Flight Date Range</p>
          <p>01/01/2023 - 01/01/2024</p>
        </div>
        <div>
          <p className="text-gray-500">Flight Region</p>
          <p>APAC - Asia</p>
        </div>
        <div>
          <p className="text-gray-500">Flight Route</p>
          <p>LAX to JFK</p>
        </div>
      </div>

      {/* AI Image Process Output */}
      <h2 className="text-lg font-semibold mb-3">AI Image Process Output</h2>
      <div className="aspect-video w-full bg-gray-200 rounded-lg flex items-center justify-center mb-6">
        <p className="text-gray-500">[Airplane Image Placeholder]</p>
      </div>

      
      {/* Flight Food Waste Analysis */}
<h2 className="text-lg font-semibold mb-3">Flight Food Waste Analysis</h2>
<div className="flex gap-6 mb-6">
  <Card className="w-1/2">
    <CardHeader>
      <CardTitle>Waste by Meal Service</CardTitle>
      <CardDescription>Average: 29%</CardDescription>
    </CardHeader>
    <CardContent>
      <Bar data={wasteByMealServiceData} options={chartOptions} />
    </CardContent>
  </Card>
  <Card className="w-1/2">
    <CardHeader>
      <CardTitle>Waste by Food Category</CardTitle>
      <CardDescription>Average: 27%</CardDescription>
    </CardHeader>
    <CardContent>
      <Bar data={wasteByFoodCategoryData} options={chartOptions} />
    </CardContent>
  </Card>
</div>


      {/* Meal Recommendation */}
      <h2 className="text-lg font-semibold mb-3">Meal Recommendation</h2>
      <div className="grid gap-4">
        {[
          {
            title: "Beef Pastrami Salad",
            labels: ["High Protein", "Low Carb", "Seasonal Vegetables"],
            waste: "03%",
            image: BeefPastramiSaladImage,
          },
          {
            title: "Steamed Pork with Preserved Mustard Greens",
            labels: ["High Protein", "Low Carb", "Seasonal Vegetables"],
            waste: "04%",
            image: SteamedPorkImage,
          },
        ].map((meal, index) => (
          <Card key={index} className="flex">
            <div className="w-1/3">
              <img
                src={meal.image}
                alt={meal.title}
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
            <CardContent className="flex-1 p-4">
              <CardTitle>{meal.title}</CardTitle>
              <div className="flex flex-wrap gap-2 my-2">
                {meal.labels.map((label, idx) => (
                  <Badge key={idx} variant="secondary">
                    {label}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-500">Estimated Waste: {meal.waste}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

