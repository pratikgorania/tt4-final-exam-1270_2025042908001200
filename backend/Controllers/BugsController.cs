using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BugsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BugsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/bugs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bug>>> Get()
        {
            return await _context.Bugs.ToListAsync();
        }

        // GET: api/bugs/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Bug>> Get(int id)
        {
            var bug = await _context.Bugs.FindAsync(id);
            if (bug == null)
                return NotFound();

            return bug;
        }

        // POST: api/bugs
        [HttpPost]
        public async Task<ActionResult<Bug>> Post(Bug bug)
        {
            _context.Bugs.Add(bug);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = bug.ID }, bug);
        }

        // PUT: api/bugs/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Bug bug)
        {
            if (id != bug.ID)
                return BadRequest();

            _context.Entry(bug).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/bugs/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var bug = await _context.Bugs.FindAsync(id);
            if (bug == null)
                return NotFound();

            _context.Bugs.Remove(bug);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
