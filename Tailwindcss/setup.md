## How to setup Tailwind CSS 

Step 1: Run the following commands 

```
npm install -D tailwindcss
npx tailwindcss init
```
Step2: Update tailwind.conf.js file to include this linw:
```
content: ["*.html"],
```

Step3: create src/input.css to include: 
``` 
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Include the src/output.css file to your html


Step 5: Run the following commands
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```