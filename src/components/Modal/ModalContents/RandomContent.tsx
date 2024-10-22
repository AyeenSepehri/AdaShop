import React from 'react';

interface PaymentStatusProps {
    onClose: () => void; // Function to close the modal
}

const PaymentStatus: React.FC<PaymentStatusProps> = ({ onClose }) => {
    const statuses = ["پرداخت موفق بود", "پرداخت ناموفق بود"]; // Success or failure messages
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]; // Pick random message

    return (
        <div className="text-center flex flex-col gap-5">
            <img
                src={`${randomStatus === "پرداخت موفق بود" ? "/icons/SuccessSign.svg" : "/icons/FailedSign.svg"}`}
                alt={"statusSign"}
                className="w-20 mx-auto"
            />
            <p className="text-lg font-semibold mb-4">{randomStatus}</p>
            <button
                onClick={onClose}
                className="px-4 py-2 bg-purple-700 text-white rounded"
            >
                بستن
            </button>
        </div>
    );
};

export default PaymentStatus;
