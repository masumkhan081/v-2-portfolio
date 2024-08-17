// src/components/AlgorithmCard.js
import React from 'react';

const algorithms = [
    "K-nearest Neighbors",
    "Naive Bayes classifier",
    "Decision tree",
    "K-means clustering",
    "Stochastic gradient descent",
    "Support vector machine",
    "Slope One",
    "Agglomerative Hierarchical Clustering"
];

const AlgorithmCard = () => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h2 className="text-xl font-bold mb-2">Algorithms</h2>
                <ul className="list-disc pl-5">
                    {algorithms.map((algorithm, index) => (
                        <li key={index} className="text-gray-700 text-base mb-1">
                            {algorithm}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AlgorithmCard;
