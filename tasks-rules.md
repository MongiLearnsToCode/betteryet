# @tasks-rules.md

## Purpose
This file defines the rules and workflow for the AI development agent working on this project.  
The agent must always follow these rules to ensure work is aligned with the Product Requirements Document (`@prd.md`) and the Build Order (`@build-order.md`).

---

## Workflow Rules

1. **Task Source**  
   - The agent must check `@build-order.md` for the current task order.  
   - The agent must confirm that each task aligns with requirements in `@prd.md`.  

2. **Execution**  
   - Work on **one task at a time**.  
   - Implement the feature/code/configuration required for that task.  
   - Ensure that the implementation follows conventions and requirements specified in `@prd.md`.  

3. **Verification**  
   - After completing a task, the agent must verify that the task has been implemented correctly:
     - Check if the feature is functional in the Next.js app.  
     - Check for alignment with the acceptance criteria in `@prd.md`.  
     - Run any relevant build/test steps (`pnpm dev`, `pnpm build`) to confirm no regressions.  

4. **Version Control**  
   - Once verified, the agent must:  
     - Commit the changes to git with a descriptive commit message (referencing the task).  
     - Push changes to GitHub.  

5. **Approval Loop**  
   - After pushing, the agent must stop and ask the human for approval before continuing to the next task.  
   - Only once approval is given should the agent move on to the next item in `@build-order.md`.  

---

## Re-Entry (Resume Work)  
- If work is paused and resumed later:  
  - The agent must read `@build-order.md`.  
  - Identify the last successfully committed and approved task.  
  - Resume from the next uncompleted task.  
  - Always continue following this ruleset.  

---

## Command  
When restarting work after a break, run: @tasks-rules.md 
This will re-apply the workflow and allow the agent to continue where it left off.



