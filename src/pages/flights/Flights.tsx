"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PlusCircle } from "lucide-react";

// Importing images from /src/assets/
import beefImg from "@/assets/beef.webp";
import mushroomImg from "@/assets/mushroom.webp";
import chickenImg from "@/assets/chicken.jpg";

export const Flights: React.FC = () => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [flightDate, setFlightDate] = useState<string>("");
  const [flightNumber, setFlightNumber] = useState<string>("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileURLs = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreviewImages(fileURLs);
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Flight</h1>

      {/* Flight Date and Flight Number Fields */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <Label htmlFor="flightDate" className="block mb-2 font-semibold">
            Flight Date
          </Label>
          <Input
            type="date"
            id="flightDate"
            value={flightDate}
            onChange={(e) => setFlightDate(e.target.value)}
            className="w-full h-12 bg-white border border-gray-300 rounded-lg focus:border-black focus:ring-black"
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="flightNumber" className="block mb-2 font-semibold">
            Flight Number
          </Label>
          <select
            id="flightNumber"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            className="w-full h-12 bg-white border border-gray-300 rounded-lg focus:border-black focus:ring-black"
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
            ].map((number) => (
              <option className="p-4" key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Meals Section */}
      <h2 className="text-xl font-semibold mt-6 mb-3">Pre-Flight Meals</h2>
      <div className="flex gap-4">
        {[
          {
            title: "Chicken Curry with Rice",
            description: "High Protein",
            images: [chickenImg],
          },
          {
            title: "Mushroom Noodles With Potatoes",
            description: "Seasonal Vegetables",
            images: [mushroomImg],
          },
          {
            title: "Beef Steak with Potatoes",
            description: "High Carbs",
            images: [beefImg],
          },
        ].map((meal, index) => (
          <Card key={index} className="w-full max-w-xs ">
            <CardHeader>
              <CardTitle className="text-md">{meal.title}</CardTitle>
              <CardDescription>{meal.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-2">
              {meal.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`${meal.title} image ${idx + 1}`}
                  className="w-30 h-30 object-cover rounded-md"
                />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Post-Flight Meal Upload Section */}
      <h2 className="text-xl font-semibold mt-6 mb-3">Post-Flight Meal</h2>
      <div className="border border-dashed border-gray-300 rounded-lg p-16">
        <Label htmlFor="upload" className="text-center cursor-pointer block">
          Drag and drop or choose files
        </Label>
        <Input
          type="file"
          id="upload"
          accept="image/*"
          className="hidden"
          multiple
          onChange={handleImageUpload}
        />
      </div>

      {/* Preview Images */}
      <h3 className="text-lg font-semibold mt-4 mb-3">Preview Images</h3>
      <div className="flex justify-center gap-4">
        {previewImages.length ? (
          previewImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Preview ${index + 1}`}
              className="w-80 h-80 object-cover rounded-md"
            />
          ))
        ) : (
          <p className="text-gray-500">No images uploaded</p>
        )}
      </div>

      {/* Generate Report Button */}
      <Button
        className="mt-6 w-full h-12 mx-auto flex justify-center"
        onClick={() => alert("Flight Added")}
      >
        <PlusCircle className="mr-2 h-5 w-5" />
        Add Flight
      </Button>
    </div>
  );
};
