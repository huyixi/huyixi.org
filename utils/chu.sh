kill -9 $(lsof -t -i:1313)

# Custom your path
cd ~/i/huyixi.com

# Define the directory to navigate to
DIR_TO_NAVIGATE="$(pwd)/themes/blue/"

# Print the directory (for debugging purposes)
echo "Attempting to navigate to: $DIR_TO_NAVIGATE"

# Execute the osascript command
osascript <<EOD
tell application "iTerm"
    activate
    create window with default profile
    tell current window
        tell current session
            write text "cd $DIR_TO_NAVIGATE"
            delay 1
            write text "npm run dev"
        end tell
    end tell
end tell
EOD


# Start the Hugo server in the background
hugo server &

# Open the current directory in Visual Studio Code
code .

open -a "Google Chrome" http://localhost:1313/
