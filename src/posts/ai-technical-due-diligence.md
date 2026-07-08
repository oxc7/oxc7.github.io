When a target company ships AI, or claims to, the investment committee does not need to know whether the technology is impressive. It needs to know three things: what the technology is worth, what it will cost to own, and what it lets us do after close. Every item in my diligence framework exists to answer one of those three questions. A finding that answers none of them is trivia, and I cut it from the memo.

Below is the framework I use, in the order I apply it. For each area I cover what I examine, the red flags I have learned to weight heavily, and the part most technical reviews skip: how the finding translates into deal terms.

One scope note before starting. This framework is for targets that already ship AI or run models in production. Many of the businesses we look at, including most Japanese SMEs, have never used AI at all. That is a different exercise: discovering opportunities rather than auditing claims, and it deserves its own playbook, which I cover in a companion post.

## 1. Data assets: the thing that is actually durable

Models depreciate. Architectures get rewritten. The data a business generates through its own operations is usually the only technical asset with a decade-long life, so I start there.

**What I examine.** Provenance and rights first: can the company legally use, retain, and train on the data it holds, under its customer contracts and applicable privacy law? Then uniqueness: is this proprietary operational exhaust that only this business produces, or something a competitor could buy or scrape? Then the compounding test: does the dataset grow and improve as a byproduct of normal operations, or does it require paid effort to maintain? Finally, mundane quality checks that predict everything downstream: labeling consistency, coverage of edge cases, whether anyone can actually join the tables that matter.

**Red flags.** Training data scraped or purchased with unclear rights. Customer contracts silent on data usage. A "proprietary dataset" that turns out to be a public source with a schema on top. Data locked in per-customer silos that cannot legally be pooled.

**Deal translation.** This is where the upside case lives, not just the risk case. A data asset that makes revenue predictable, for example ten years of transaction history showing that most of next year's revenue is effectively recurring, is an argument lenders understand, and it can support more leverage than the industry-standard assumption. In the other direction, unclear data rights become representations, warranties, and escrow in the purchase agreement, because the liability surfaces after close.

## 2. Model quality versus demo quality

Every CIM demo works. The question is whether the system works on the traffic it will actually see, and whether anyone at the company can prove it.

**What I examine.** I ask for the evaluation harness before I ask for the accuracy number. A team with held-out test sets, meaningful baselines, and monitoring for drift in production is telling me the number is real. A team that quotes accuracy without a denominator is telling me the opposite. I also establish what the "AI" actually is. A thin orchestration layer over a foundation-model API is a perfectly good product choice, but it is a different asset, with a different moat and different margin structure, than the proprietary model the deck describes.

**Red flags.** Metrics with no test-set definition. No monitoring, so nobody knows if the model has degraded since launch. Offline metrics that have never been reconciled against a business outcome. A demo environment that differs meaningfully from production.

**Deal translation.** If the CIM's moat claim rests on the model and the model is a replaceable wrapper, the strategic premium in the price does not hold, and the valuation conversation changes. If the model is real but unmeasured, that is not a discount, it is a value-creation item: instrumenting it is cheap and usually week-one work on the post-close roadmap.

## 3. Architecture and the true cost of scaling

The value-creation thesis usually assumes the business gets bigger. I want to know what the technology bill for that growth looks like, because it belongs in the model as a number, not in the memo as an adjective.

**What I examine.** Unit economics of inference: what one prediction, document, or conversation costs to serve today, and what gross margin looks like at five or ten times the volume. Architectural debt: the systems that work at current scale but need rebuilding to grow, and the realistic cost and timeline of that rebuild. Operational maturity: deployment practices, incident history, whether the infrastructure is reproducible or held together by one engineer's shell scripts.

**Red flags.** Serving costs that scale linearly with revenue in a business priced for software margins. A core system the team openly describes as untouchable. Cloud spend growing faster than usage.

**Deal translation.** A required rebuild is capex the seller's projections do not include. Quantified, it goes into the model directly or comes off the price in negotiation. Serving costs that erode gross margin at scale attack the exit multiple assumption, which is a larger number than most technical reviewers realize they are holding.

## 4. Team and key-person risk

An AI system nobody at the company can maintain is a depreciating asset with a hidden replacement cost.

**What I examine.** Who built the core models and who can modify them today, which are often different people by the time a company sells. The bus factor on each critical system. Whether knowledge lives in documentation and code review or in two heads. How dependent the roadmap is on people who may not stay through a change of control.

**Red flags.** A single irreplaceable ML engineer, especially one with no equity in the outcome. Contractors who built the core system and have left. A team whose skills match the demo but not the roadmap.

**Deal translation.** Key-person risk is a structuring input more than a pricing input: retention packages, earnouts tied to system continuity, and in extreme cases closing conditions. It also sets the integration plan, because the first ninety days look very different when the goal includes de-risking a bus factor of one.

## 5. Security and compliance posture

I have written separately about [penetration testing AI products](/blog/pentest-ai-products/) and the [assessment toolkit](/blog/kali-linux-commands/) I use, so I will keep this section short. The diligence point is that a vulnerable AI product is a liability that surfaces after close, when it is ours.

**What I examine.** Classic application security, which most AI startups have underinvested in, plus the AI-specific surface: prompt injection paths to data the model can reach, training-data leakage, and abuse of expensive inference endpoints. On compliance, whether data handling actually matches privacy law in the operating jurisdictions and what obligations attach to the model outputs.

**Deal translation.** Remediation is a quantifiable cost that belongs in the model. Breach exposure and regulatory gaps belong in indemnities. Neither should be discovered by the incident that makes them expensive.

## 6. Dependency and vendor risk

Modern AI products are assembled, and the assembly has landlords.

**What I examine.** Concentration on a single foundation-model provider and what happens to margin if that provider reprices. License terms on the open-weight models and datasets in the stack, some of which restrict exactly the commercial use the company depends on. Contractual exposure hiding in API terms of service.

**Deal translation.** Provider concentration is a margin-sensitivity scenario the model should carry. A license violation in the core product is a remediation cost and occasionally a genuine deal issue.

## From findings to deal terms

The discipline that holds the framework together is simple: every finding must end in one of three places.

1. **The price**, as an adjustment supported by a number.
2. **The structure**, as an escrow, indemnity, earnout, retention package, or closing condition.
3. **The plan**, as a line item in the first ninety days of the value-creation roadmap, with an owner and a cost.

A finding that ends nowhere is an observation, and observations do not belong in an IC memo. This rule also keeps the work honest in the positive direction. Diligence is not only a search for reasons to pay less; the data asset that supports more leverage and the unmeasured model that becomes a quick win are findings too, and they are often what makes the deal.

That is also why I treat diligence and value creation as one continuous exercise rather than two departments. The map I build assessing a target, of its data, its systems, its people, and its risks, is the first draft of the plan I will be executing with that company after close. The best diligence output is not a risk register. It is a roadmap with prices on it.
