const express = require('express');
const apiRouters = require('./routers/apiRouters.ts');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", apiRouters);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
