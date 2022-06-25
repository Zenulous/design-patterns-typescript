// Chain of Responsibility
// Avoid coupling the sender of a request to a receiver by giving more than one receiver a chance to handle the request. Chain the receiving objects and pass the request along the chain until one of them handles it.
interface ResponsibilityHandler {
  handle(request: string): string;
  setNextHandler(nextHandler: ResponsibilityHandler): void;
}

abstract class AbstractHandler implements ResponsibilityHandler {
  protected nextHandler: ResponsibilityHandler | null;
  constructor(nextHandler?: ResponsibilityHandler) {
    this.nextHandler = nextHandler || null;
  }
  setNextHandler(nextHandler: ResponsibilityHandler): void {
    this.nextHandler = nextHandler;
  }

  public handle(request: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return "Request could not be handled";
  }
}
enum SupportTicketCategory {
  billing = "billing",
  complaints = "complaints",
}

class BillingSupportHandler extends AbstractHandler {
  public override handle(request: SupportTicketCategory): string {
    if (request === SupportTicketCategory.billing) {
      return `Your billing support ticket has been handled`;
    } else {
      return super.handle(request);
    }
  }
}

class ComplaintsSupportHandler extends AbstractHandler {
  public override handle(request: SupportTicketCategory): string {
    if (request === SupportTicketCategory.complaints) {
      return `Your complaints support ticket has been handled`;
    } else {
      return super.handle(request);
    }
  }
}

function handleSupportRequest(ticketCategory: SupportTicketCategory) {
  // We start with the billing handler, who will pass down the request if it can't handle it
  return billingSupportHandler.handle(ticketCategory);
}
const complaintsSupportHandler = new ComplaintsSupportHandler();
const billingSupportHandler = new BillingSupportHandler(
  complaintsSupportHandler
);

billingSupportHandler.setNextHandler(complaintsSupportHandler);
console.log("Billing Request");
console.log(handleSupportRequest(SupportTicketCategory.billing));
console.log("\nComplaints Request");
console.log(handleSupportRequest(SupportTicketCategory.complaints));
console.log("\nUnexpected Request");
console.log(handleSupportRequest("!@#?@@#$?@#$" as any));
