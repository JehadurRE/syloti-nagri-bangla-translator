
import { AlertCircle } from 'lucide-react';

interface RateLimitInfoProps {
  remainingRequests: number | null;
}

const RateLimitInfo = ({ remainingRequests }: RateLimitInfoProps) => {
  if (remainingRequests === null) return null;

  return (
    <div className="glass-effect p-4 rounded-xl">
      <div className="flex items-center justify-center space-x-2 text-sm">
        <AlertCircle className="w-4 h-4 text-blue-500" />
        <span className="text-gray-600 dark:text-gray-400">
          Remaining requests: <span className="font-semibold text-blue-600 dark:text-blue-400">{remainingRequests}</span>
        </span>
      </div>
    </div>
  );
};

export default RateLimitInfo;
