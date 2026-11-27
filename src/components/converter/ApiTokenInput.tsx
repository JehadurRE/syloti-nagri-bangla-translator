
interface ApiTokenInputProps {
  apiToken: string;
  setApiToken: (token: string) => void;
}

const ApiTokenInput = ({ apiToken, setApiToken }: ApiTokenInputProps) => {
  return (
    <div className="mb-8">
      <div className="glass-effect p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="api-token" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            API Token
          </label>
          <button
            type="button"
            className="text-xs px-3 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition"
            onClick={() => setApiToken('demo-token-123')}
          >
            Use Demo Token
          </button>
        </div>
        <input
          id="api-token"
          type="password"
          value={apiToken}
          onChange={(e) => setApiToken(e.target.value)}
          placeholder="Enter your API token (e.g., demo-token-123{use it if if you don't have any token})"
          className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Your token will be saved locally for this session.
          <i> need more token? open an <a href="https://github.com/JehadurRE/syloti-nagri-bangla-translator/issues" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">issue on GitHub</a> </i>
        </p>
      </div>
    </div>
  );
};

export default ApiTokenInput;
