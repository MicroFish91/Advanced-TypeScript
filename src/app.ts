import http from "http";

http
  .createServer((_req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        ok: true,
        timestamp: new Date().toISOString(),
      })
    );
  })
  .listen(3000);
