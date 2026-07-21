In a [companion post](/blog/ai-technical-due-diligence/) I described how I assess targets that already ship AI: auditing claims, pricing risks, testing whether the model behind the demo is real. Most of the businesses we acquire are the opposite case. They are profitable companies that have run for decades on paper, fax, phone calls, and hard-earned judgment, and they have never used AI at all. In Japan, where owner succession is bringing thousands of these companies to market, this is not the edge case. It is the market.

Working with them is a different exercise. There are no claims to audit. Management cannot tell you where AI would help, because they do not know what the technology can do, and there is no reason they should. The work is discovery: finding the improvements the company cannot see from inside, and then, just as importantly, deciding together which ones to pursue. This post covers how I do both.

## Start with the work, not the technology

I do not begin by asking where AI could be applied. I begin by following the work itself. Pick a real order, a real claim, a real customer request, and trace it end to end through the company: who touches it, what gets written down, where it waits, what gets typed twice.

A consistent set of patterns shows up:

- **Human bridges.** A person whose job is moving information between two systems, or between paper and a system: re-keying faxed orders, copying spreadsheet rows into the accounting package, reading emails and updating a schedule.
- **Rule-of-thumb decisions.** Pricing, purchasing volumes, staffing levels, and delivery routes set by experience and habit rather than by the company's own data, which usually exists but has never been asked a question.
- **Waiting.** Approvals, quotes, and responses that take days not because the decision is hard but because the queue is invisible and nobody owns it.
- **Trapped knowledge.** The one veteran who knows why the machine is adjusted a certain way in summer, or which customer will accept a substitution. Knowledge that leaves in a retirement.

None of these observations mention AI. That is deliberate. The inventory of how work actually happens is the raw material for everything that follows, and it earns something a technology pitch never does: management recognizes their own company in it.

## Two lenses: with AI, and without

Every improvement candidate then goes through two lenses, and I present both, because a surprising share of the value needs no AI at all.

**The without-AI lens.** Much of what I find is fixed by basic digitization and process change: a shared database instead of five personal spreadsheets, a standard intake form instead of free-text faxes, an off-the-shelf tool for scheduling, a queue that someone owns. These fixes are cheap, fast, and low-risk, and they come first for a structural reason as well as a practical one: they create the clean, consistent data that any future AI work will depend on. An agentic workflow built on top of paper processes fails. The unglamorous fixes are the foundation.

Being explicit about this lens also matters for trust. A team that hears "some of your biggest improvements have nothing to do with AI" knows it is getting an honest assessment, not a pitch.

**The with-AI lens.** On the foundation, AI earns its place where the leverage is real. In practice that clusters around a few workflow shapes: document-heavy processes where models read, extract, classify, and draft; forecasting and pricing decisions where the company's own history beats rule of thumb; customer response and quotation drafting where a first draft in seconds changes the economics of the queue; and capturing veteran judgment as decision support before it retires.

Increasingly the right unit of design is the agentic workflow: a system that carries a multi-step task across tools, such as reading an incoming order, checking stock and price history, drafting the confirmation and the purchase order, and routing exceptions to a person. The design principle I hold to is that the human approval gate stays wherever an error is expensive. The goal is to remove the re-keying and the waiting, not the judgment.

## How the decision actually gets made

The findings then become a working session, not a mandate, and the sequence matters.

First, I write up the technical synthesis: what we observed, the improvement candidates through both lenses, rough effort and impact for each, and what I think the sequencing should be. Then we present it to the management team before anything is decided, and ask them to challenge it with the lens only they have: which customers would notice, which process exists for a regulatory reason we missed, which veteran's workflow is untouchable this quarter, which of our impact guesses are naive.

Some of our candidates die in that room, and that is the session working as intended. The operators know things about the business that no amount of technical observation surfaces, and a proposal that survives their scrutiny is simply a better proposal. The final roadmap is decided together, combining the technical synthesis with their business judgment, and each initiative gets a baseline metric, an expected impact, and an owner, usually inside the company rather than at the fund.

I hold to this sequence for a reason beyond politeness. A transformation that management approved, shaped, and co-owns gets executed; one imposed by the new owner's technology person gets quietly outlasted. In Japanese SMEs especially, where the management team's trust is often the most valuable asset that came with the acquisition, this is not a soft consideration. It is the difference between a roadmap and a document.

## The honest summary

The diligence post and this one are two halves of the same job. When a target ships AI, the work is auditing claims and pricing what is real. When a target has never touched it, the work is discovery through the two lenses, sequenced foundation-first, and decided jointly with the people who will live with the result. The second case has quieter technology and, in my experience, the larger and more durable returns, because the gap between how the company runs today and what its own data makes possible has been compounding, untouched, for decades.
