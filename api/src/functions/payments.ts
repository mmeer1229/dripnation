import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

// staticwebapp.config.json's globalHeaders do not apply to /api/* responses
// (Azure SWA docs: "Global headers do not affect API responses") — so
// security headers for this API have to be set here directly.
const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "Content-Security-Policy": "default-src 'none'",
};

async function health(
  _request: HttpRequest,
  _context: InvocationContext,
): Promise<HttpResponseInit> {
  return {
    status: 200,
    headers: SECURITY_HEADERS,
    jsonBody: {
      status: "ok",
      service: "payments",
    },
  };
}

app.http("paymentsHealth", {
  route: "payments/health",
  methods: ["GET"],
  authLevel: "anonymous",
  handler: health,
});

// Stub only. Checkout flow (Square Web Payments SDK vs Square hosted
// checkout) is not decided yet.
//
// Security note for whoever implements this: the frontend sends a
// client-computed `subtotal` — that's fine for display, but never trust it
// for the actual charge amount. Recompute the price server-side from known
// product/tier data before calling Square, otherwise a tampered request
// body can pay less than the real price.
async function createCheckout(
  _request: HttpRequest,
  _context: InvocationContext,
): Promise<HttpResponseInit> {
  return {
    status: 501,
    headers: SECURITY_HEADERS,
    jsonBody: {
      error: "not_implemented",
      message: "Payment processing is not configured yet.",
    },
  };
}

app.http("paymentsCreateCheckout", {
  route: "payments/checkout",
  methods: ["POST"],
  authLevel: "anonymous",
  handler: createCheckout,
});
