import React from 'react'

export default function Nutrition() {
  return (
    <div className="p-1 border-2 border-black font-sans w-72">
    <div className="text-4xl font-extrabold leading-none">Nutrition Facts</div>
    <div className="leading-snug">8 servings per container</div>
    <div className="flex justify-between font-bold border-b-8 border-black">
        <div>Serving size</div><div>2/3 cup (55g)</div>
    </div>
    <div className="flex justify-between items-end font-extrabold">
        <div>
            <div className="font-bold">Amount per serving</div>
            <div className="text-4xl">Calories</div>
        </div>
        <div className="text-5xl">45</div>
    </div>
    <div className="border-t-4 border-black text-sm pb-1">
        <div className="text-right font-bold pt-1 pb-1">% Daily value*</div>
        <hr className="border-gray-500"/>
        <div claclassNamess="flex justify-between">
            <div>
                <span className="font-bold">Total Fat</span> 8g
            </div>
            <div className="font-bold">10%</div>
        </div>
        <hr className="border-gray-500"/>
        <div className="flex justify-between">
            <div>Saturated Fat 1g</div>
            <div className="font-bold">5%</div>
        </div>
        <hr className="border-gray-500"/>
        <div>
            <span className="italic">Trans Fat</span> 8g
        </div>
        <hr className="border-gray-500"/>
        <div className="flex justify-between">
            <div>
                <span className="font-bold">Cholesterol</span> 0mg
            </div>
            <div className="font-bold">0%</div>
        </div>
        <hr className="border-gray-500"/>
        <div className="flex justify-between">
            <div>
                <span className="font-bold">Sodium</span> 160mg
            </div>
            <div className="font-bold">7%</div>
        </div>
        <hr className="border-gray-500"/>
        <div className="flex justify-between">
            <div>
                <span className="font-bold">Total Carbohydrate</span> 37g
            </div>
            <div className="font-bold">13%</div>
        </div>
        <hr className="border-gray-500"/>
        <div className="flex justify-between">
            <div className="pl-4">
                Dietary Fiber 4g
            </div>
            <div className="font-bold">14%</div>
        </div>
        <hr className="border-gray-500"/>
        <div className="pl-4">
            Total Sugar 12g
            <div className="pl-4">
                <hr className="border-gray-500"/>
                <div className="flex justify-between">
                    <div>Includes 10g Added Sugars</div>
                    <div className="font-bold">20%</div>
                </div>
            </div>
        </div>
        <hr className="border-gray-500"/>
        <div>
            <span className="font-bold">Protein</span> 3g
        </div>
    </div>
    <div className="border-t-8 border-black pt-1 text-sm">
        <div className="flex justify-between">
            <div>Vitamin D 2mcg</div>
            <div>10%</div>
        </div>
        <hr className="border-gray-500"/>
        <div className="flex justify-between">
            <div>Calcium 260mg</div>
            <div>20%</div>
        </div>
        <hr className="border-gray-500"/>
        <div className="flex justify-between">
            <div>Iron 8mg</div>
            <div>45%</div>
        </div>
        <hr className="border-gray-500"/>
        <div className="flex justify-between">
            <div>Potassium 240mg</div>
            <div>6%</div>
        </div>
        <div className="border-t-4 border-black flex leading-none text-xs pt-2 pb-1">
            <div className="pr-1">*</div>
            <div>The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</div>
        </div>
    </div>
</div>
  )
}
