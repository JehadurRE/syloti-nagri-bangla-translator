
interface ApiTokenInputProps {
  apiToken: string;
  setApiToken: (token: string) => void;
}

const ApiTokenInput = ({ apiToken, setApiToken }: ApiTokenInputProps) => {
  return (
    <div className="mb-8">
      <div className="glass-effect p-6 rounded-2xl">
        <label htmlFor="api-token" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          API Token
        </label>
        <input
          id="api-token"
          type="password"
          value={apiToken}
          onChange={(e) => setApiToken(e.target.value)}
          placeholder="Enter your API token (e.g., demo-token-123)"
          className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Your token will be saved locally for this session
        </p>
      </div>
    </div>
  );
};

export default ApiTokenInput;
