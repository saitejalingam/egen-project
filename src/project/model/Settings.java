package project.model;

public class Settings {
	
	private int capacity;
	private int overbook;
	private boolean autofill;
	
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public int getOverbook() {
		return overbook;
	}
	public void setOverbook(int overbook) {
		this.overbook = overbook;
	}
	public boolean isAutofill() {
		return autofill;
	}
	public void setAutofill(boolean autofill) {
		this.autofill = autofill;
	}
	
	
}
